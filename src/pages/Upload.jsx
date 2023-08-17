import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../context/AuthProvider";
import {useApp} from "../context/AppContext";
import {storage} from "../firebase";
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getAuth } from "firebase/auth";


//上传PDF并获取下载链接:
export default function Upload(){
    const navigate = useNavigate();
    const auth = getAuth();
    const { currentUser } = useAuth();
    const { resumeLink ,setResumeLink } = useApp();
    const [selectedFile, setSelectedFile] = useState(null);

    function onFileChange(e) {
        const file = e.target.files[0];
        setSelectedFile(file);
    }

    async function onFileUpload() {
        if (auth.currentUser) {
            // console.log("Current user UID:", auth.currentUser.uid);
        } else {
            console.log("No user is currently signed in.");
        }

        if (selectedFile) {
            const storageRef = ref(
                storage,
                'resume-' + selectedFile.name
            );
            try {
                await uploadBytes(storageRef, selectedFile);
                const downloadURL = await getDownloadURL(storageRef);
                setResumeLink(downloadURL);
            } catch (error) {
                console.error("Error uploading file:", error.message);
                alert("Error uploading file: " + error.message);
            }
        } else {
            alert('请先选择文件！');
        }
    }

    useEffect(() => {
        if (!currentUser) {
            navigate("/login");  // Redirect to login if the user is not authenticated
        }

    }, []);

    return (
        <div className={'text-center'}>
            <h1>Upload</h1>
            <input type="file" onChange={onFileChange} />
            <button onClick={onFileUpload}>Upload</button>
            <div>
                {resumeLink && <a href={resumeLink} target="_blank" rel="noopener noreferrer">Open PDF</a>}
            </div>
        </div>
    )
}