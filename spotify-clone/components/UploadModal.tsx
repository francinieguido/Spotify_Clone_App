import useUploadModal from "@/hooks/useUploadModal";
import {useState} from "react";
import Modal from "./Modals";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import { register } from "module";

const UploadModal = () => {

    const [isLoading, setIsLoading] = useState();

    //Customized hook for modal
    const uploadModal = useUploadModal();

    //Form
    const {
        // Extracting
        register,
        handleSubmit,
        reset
    } = useForm<FieldValues>({
        defaultValues: {
            author: '',
            title: '',
            song: null,
            image: null
        }

    });

    //Handle change
    const onChange = (open:Boolean) => {
        if (!open){
            //Reset form
            reset();
            uploadModal.onClose();
        }
    };

    const onSubmit: SubmitHandler<FieldValues> = async (values) => {
        //Upload song info to Supabase
    };

    return (
        <Modal 
        title="Add a song"
        description="Upload music file (mp3)"
        isOpen ={uploadModal.isOpen}
        onChange={onChange}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                id="title"
                disabledd={isLoading}
                // This will pass some props
                {...register('title', {required: true})}
                placeholder="Song title"
                />

            </form>
        </Modal>
    );
};

export default UploadModal;