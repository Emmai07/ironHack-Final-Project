  import React,{useState} from 'react'
  import { IconButton,ChakraProvider,Textarea, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, Input } from '@chakra-ui/react';
  import { BASE_URL } from './baseurl';
  import { ToastContainer, toast } from 'react-toastify';
  import axios from 'axios';

  const Addcomments=({tutorial,comments,setComments,selectedColor})=>{
      const [newComment,setNewComment]=useState("")
      const handleAddComment = async(id) => {
          try{
          
            let response=await axios.post(`${BASE_URL}/tutorials/${id}/comments`,{content:newComment})
      
        if (newComment.trim()) {
          setComments(prevComments => ({
            ...prevComments,
            [id]: [...(prevComments[id] || []), { id: response.data.id, content: newComment }]
          }));
          setNewComment('');
          toast.success("Comment added successfully")
        }
          }catch(e){
            toast.error(e.message)
          }
        
        };
      return(
          <div className="flex flex-col mt-auto">
          <Textarea
          rows="3"
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full border rounded-lg p-2 mb-2 resize-none"
        />
        <span style={{background:selectedColor}} className='max-w-[160px] mt-[8px] text-white px-4 py-2 hover:cursor-pointer rounded-lg' onClick={() => handleAddComment(tutorial?.id)}>
          Submit Comment
        </span>       
            </div>
      )
  }

  export default Addcomments;