import React , { useState } from 'preact/compat'
import p from 'phin'
import InputFieldOutline from "../../components/InputFieldOutline";
import FilledBtn from "../../components/FilledBtn"
import styles from './style.css'

const UploadRoute = () => {
    const [form, setForm] = useState({tags: []})
    const [filesToUpload, setFilesToUpload] = useState({})
    const [loading, setLoading] = useState(false)
    const [episodes, setEpisodes] = useState(1)
    const [alternativeNames, setAlternativeNames] = useState(1)

    const formPropsHandler = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }
    const upload = async () => {
        setLoading(true)
        const filenames = await p({ url: 'http://localhost:3000/products/upload',  data: {...form, cover: filesToUpload.cover.name, episodes: Object.values(filesToUpload.episodes).map(el => el.name)}, method: "POST"})
        const filesToUploadData = new FormData()
        filesToUploadData.append("cover", filesToUpload.cover, filenames.data.coverFileName)
        for (let i in filenames.data.episodesFileNames) {
            filesToUploadData.append("episodes", Object.values(filesToUpload.episodes)[i], filenames.data.episodesFileNames[i])
        }
        await p({url: 'http://localhost:3000/products/uploadFiles', data: filesToUploadData, method: "POST"}).finally(() => setLoading(false))
    }

    return(
        <div class={styles.container}>
            <InputFieldOutline type="text" placeholder="Title" name="title" onChange={formPropsHandler}/>
            <InputFieldOutline type="text" placeholder="Studio" name="studio" onChange={formPropsHandler}/>
            <InputFieldOutline type="text" placeholder="releaseDate" name="releaseDate" onChange={formPropsHandler}/>
            <InputFieldOutline type="file" placeholder="Cover" name="cover" onChange={e => setFilesToUpload({...filesToUpload, cover: e.target.files[0]})}/>
            {Array.from(Array(episodes).keys()).map(el => {
                el+=1
                return <>
                    <InputFieldOutline placeholder={`Episode ${el}`} type="file" name={`ep${el}`}
                           onChange={e => setFilesToUpload({...filesToUpload, episodes: {...filesToUpload.episodes, [el]: e.target.files[0]}})}
                    />
                </>
            })}
            <FilledBtn onClick={() => setEpisodes(episodes+1)}>
                +
            </FilledBtn>
            {Array.from(Array(alternativeNames).keys()).map(el => {
                return <InputFieldOutline type="text" name={`name${el}`}
                              onChange={e => setForm({...form, alternativeNames: Object.values({...form.alternativeNames, [el]: e.target.value})})}
                />
            })}
            <FilledBtn onClick={() => setAlternativeNames(alternativeNames+1)}>
                +
            </FilledBtn>
            <textarea name="description"
                      onChange={formPropsHandler}
            />
            <FilledBtn onClick={() => upload()}>
                Upload
            </FilledBtn>
        </div>
    )
}

export default UploadRoute
