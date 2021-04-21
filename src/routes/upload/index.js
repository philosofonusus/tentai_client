import React , { useState } from 'preact/compat'
import InputFieldOutline from "../../components/InputFieldOutline";
import FilledBtn from "../../components/FilledBtn"
import request from '../../request'
import styles from './style.css'
import TagsComponent from "../../components/tagsComponent";
import {useDispatch, useSelector} from "react-redux";
import clearSearchTags from "../../redux/actions/searchActions/searchParams/clearSearchTags";
import {useGetUserToken} from "../../hooks/getUserToken.hook";

const UploadRoute = () => {
    const [form, setForm] = useState({tags: []})
    const [filesToUpload, setFilesToUpload] = useState({})
    const [episodes, setEpisodes] = useState(1)
    const userToken = useGetUserToken()
    const dispatch = useDispatch()
    const searchTags = useSelector(state => state.searchParams.searchTags)
    const [alternativeNames, setAlternativeNames] = useState(1)

    const formPropsHandler = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }
    const upload = async () => {
        const filenames = await request('http://localhost:3000/products/upload', "POST",{...form, cover: filesToUpload.cover.name, episodes: Object.values(filesToUpload.episodes).map(el => el.name), tags: searchTags}, {Authorization: `Bearer ${userToken}`})
        const filesToUploadData = new FormData()
        filesToUploadData.append("cover", filesToUpload.cover, filenames.coverFileName)
        for (let i in filenames.episodesFileNames) {
            filesToUploadData.append("episodes", Object.values(filesToUpload.episodes)[i], filenames.episodesFileNames[i])
        }
        await fetch('http://localhost:3000/products/uploadFiles',
            {method: 'POST', body: filesToUploadData, headers: {Authorization: `Bearer ${userToken}`}})
        dispatch(clearSearchTags())
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
            <TagsComponent />
            <FilledBtn onClick={() => upload()}>
                Upload
            </FilledBtn>
        </div>
    )
}

export default UploadRoute
