import React, { useState,useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Header from './Header';
import { IconButton,ChakraProvider,Textarea, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, Input } from '@chakra-ui/react';
import logo from './logo.svg';
import { CloseIcon,CheckIcon, EditIcon, DeleteIcon,SettingsIcon } from '@chakra-ui/icons';

import Footer from './Footer';
import image from "./emma.jpeg"
import { BASE_URL } from './baseurl';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Addcomments from './Addcomments';
function App() {

  const [comments, setComments] = useState({});
  const [newComment, setNewComment] = useState('');
  const [editCommentId, setEditCommentId] = useState(null);
  const [editCommentText, setEditCommentText] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [published, setPublished] = useState('');
  const [itemToBeDeleted,setItemToBeDeleted]=useState("")
  const [tutorials,setTutorials]=useState([])

const [isEditModalOpen, setEditModalOpen] = useState(false);
const [currentTutorial, setCurrentTutorial] = useState(null);
const [isCommentEditModalOpen, setCommentEditModalOpen] = useState(false);
const [selectedCommentId, setSelectedCommentId] = useState(null);

const colors = [
  '#FF5733', '#33FF57', '#3357FF', '#F3FF33', 
  '#FF33A1', '#FF8C33', '#33FFF1', '#9B33FF',
  '#FF3333', '#33FF88', '#3333FF', '#FFD700'
];


const [selectedColor, setSelectedColor] = useState('#ff5773');
const [isPaletteVisible, setIsPaletteVisible] = useState(false);


const togglePaletteVisibility = () => {
  setIsPaletteVisible(!isPaletteVisible);
};

const handleColorSelect = (color) => {
  setSelectedColor(color);

};
const openCommentEditModal = (id, text) => {
  setSelectedCommentId(id);
 setEditCommentText(text);
  setCommentEditModalOpen(true);
};

const closeCommentEditModal = () => {
  setCommentEditModalOpen(false);
  setSelectedCommentId(null);
  setEditCommentText("")
 
};

const openEditModal = (tutorial) => {
  setCurrentTutorial(tutorial);
  setEditModalOpen(true);
};

useEffect(() => {

if(tutorials?.length>0){
  tutorials?.forEach(tutorial => {
    if (!comments[tutorial.id]) { 
      fetchComments(tutorial.id);
    }
  });
}
}, [tutorials]);



const handleUpdateTutorial = async () => {
  
  try {
    let response = await axios.put(`${BASE_URL}/tutorials/${currentTutorial.id}`, {
      title: currentTutorial.title,
      description: currentTutorial.description,
      published: currentTutorial.published,
    });
    
    setTutorials(tutorials?.map(tut => tut.id === currentTutorial.id ? response.data : tut));
  
    setEditModalOpen(false);
  } catch (e) {
    toast.error(e.message);
  }
};

useEffect(()=>{
fetchTutorials()

},[])


const fetchTutorials=async()=>{
  try{
let response=await axios.get(`${BASE_URL}/tutorials`)
console.log(response)
setTutorials(response.data)
  }catch(e){
toast.error(e.message)
  }
}

const fetchComments = async (tutorialId) => {
 
  try {
  
    if (itemToBeDeleted === tutorialId) {
      return;
    }
    let response = await axios.get(`${BASE_URL}/tutorials/${tutorialId}/comments`);
    const commentsWithId = response?.data?.map(comment => ({
      ...comment,
      tutorialId: tutorialId
    }));
    setComments(prev => ({ ...prev, [tutorialId]: commentsWithId }));
  } catch (e) {
    toast.error(e.message);
  }
};


  

  const handleEditComment = (id, text) => {
    setEditCommentId(id);
    setEditCommentText(text);
  };
  const saveEditedComment = (tutorial) => {

    handleSaveEdit(tutorial?.id, selectedCommentId);
    closeCommentEditModal();
  };

  const handleSaveEdit = async(tutorialId, commentId) => {

try{
    let response=await axios.put(`${BASE_URL}/comments/${commentId}`,{content:editCommentText})
    setComments(prev => {
      const updatedComments = {
        ...prev,
        [tutorialId]: prev[tutorialId]?.map(comment =>
          comment.id === commentId ? { ...comment, content: editCommentText } : comment
        )
      };
  
      return updatedComments;
    });
    console.log(comments[tutorialId])
  
    setEditCommentId(null);
    setEditCommentText('');
   }catch(e){
toast.error(e.message)
   }
  };
  const handleDeleteComment = async(id) => {
   
    try{
      let response=await axios.delete(`${BASE_URL}/delete/comments/${id}`)
      setComments((prevComments) => {
        const updatedComments = {};
        Object?.entries(prevComments)?.forEach(([tutorialId, tutorialComments]) => {
          updatedComments[tutorialId] = tutorialComments?.filter(
            (comment) => comment?.id !== id
          );
        });
        return updatedComments;
      });
toast.success("Comment deleted sucessfully")
    }catch(e){
toast.error(e.message)
    }
  };

  const handleDeleteCard = async(id) => {
    setItemToBeDeleted(id)
try{
let response=await axios.delete(`${BASE_URL}/tutorials/${id}`)

  setTutorials((prev)=>{
    let old;
    if(prev?.length>0){
  old=[...prev]
    }else{
      old=prev;
    }
  old=old.filter(u=>u?.id!=id)
  return old
  })
    

}catch(e){
toast.error(e.message)
}
  };
  const handleSubmit = async(e) => {
    e.preventDefault();

    console.log('Title:', title);
    console.log('Description:', description);
    console.log('Published:', published);

try{
 
  let response=await axios.post(`${BASE_URL}/tutorials`,{title,description,published})
  console.log(response)
      setTitle('');
      setDescription('');
      setPublished('');
setTutorials([...tutorials,response.data])
}catch(e){
  console.log(e.message)
}
  };
  return (
    <div className='bg-white'>
<ToastContainer />
      <ChakraProvider>
        
        <Header selectedColor={selectedColor}/>
        <div
  className={`fixed z-40 right-0 top-1/2 transform -translate-y-1/2 transition-transform duration-300 ${
    isPaletteVisible ? 'translate-x-2' : 'translate-x-[110%]'
  }`}
>
  <div className="flex items-center gap-2 -mx-[5rem] bg-[#ff5773] p-2 rounded-lg">
    <div className="bg-[#ff5773] p-2 rounded-lg">
      <IconButton
        icon={<SettingsIcon />}
        aria-label="Settings"
        onClick={togglePaletteVisibility}
      />
    </div>
    <span className="text-white">Choose Your Color</span>
  </div>
  <div
    className="w-48 p-4  shadow-lg"
  >
    <div className="grid grid-cols-4 gap-2">
      {colors.map((color, index) => (
        <div
          key={index}
          className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
          style={{ backgroundColor: color }}
          onClick={() => handleColorSelect(color)}
        >
          {selectedColor === color && (
            <span className="text-white">&#10003;</span>
          )}
        </div>
      ))}
    </div>
  </div>
</div>


        <div className='main-container'>
          <div className=' w-full flex flex-col gap-[40px]'>
            <div className='bg-white shadow-lg p-6 rounded-lg'>
              <h2 className="text-xl font-bold mb-4">Popular Topics</h2>
              <div className="flex flex-wrap gap-2">
              {["Course", "Instructor", "Student"]?.map(tag => (
        <span
          key={tag}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = selectedColor}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'} // Use a hex code or Tailwind class color
          className="text-gray-800 px-3 py-1 rounded-full cursor-pointer transition-colors duration-300"
        >
          {tag}
        </span>
      ))}
              </div>
            </div>
            <div className='bg-white shadow-lg p-6 rounded-lg'>
              <h2 className="text-xl font-bold mb-4">Top Categories</h2>
              <div className="flex flex-col gap-2">
              {["Course", "Instructor", "Student"]?.map(tag => (
        <span
          key={tag}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = selectedColor}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'} // Use a hex code or Tailwind class color
          className="text-gray-800 px-3 py-1 rounded-full cursor-pointer transition-colors duration-300"
        >
          {tag}
        </span>
      ))}
              </div>
            </div>
          </div>
          <div className='w-full flex flex-col lg:px-6 lg:pb-6'>
            <div className="mb-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold">Featured Courses</h2>
              <a href="#" style={{color:selectedColor}} className="font-medium">See All</a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
       {tutorials?.length>0?tutorials?.map((tutorial,i)=>{
  //  fetchComments(tutorial?.id)
  return <div key={i.toString()} className="bg-white border rounded-lg shadow-lg overflow-hidden flex flex-col p-[10px] min-h-[400px]">

<div className="flex flex-row justify-end">
<IconButton
    icon={<EditIcon />}
    aria-label="Edit Tutorial"
    onClick={() => openEditModal(tutorial)}
    className="self-end mr-2"
    colorScheme="blue"
    size="sm"
  />


  <IconButton
    icon={<CloseIcon />}
    aria-label="Delete Card"
    onClick={() => handleDeleteCard(tutorial?.id)}
    className="self-end"
    colorScheme="red"
    size="sm"
  />
  </div>

  <div className="card-contain">
    <div className="relative overflow-hidden w-full h-full">
      <img
        src={image}
        alt="Course Image"
        className="object-cover w-full h-full transform transition-transform duration-300 hover:scale-105"
      />
      <div style={{background:selectedColor}} className="absolute inset-0  opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
    </div>

    <div className="p-4 flex flex-col justify-between w-full">
      <h3 className="text-xl font-semibold mb-2">{tutorial?.title}</h3>
      <p className="text-gray-600 mb-2">{tutorial?.description}</p>
      <p className="text-gray-500 text-sm">Published by Instructor</p>
    </div>
  </div>

  <div className="border-t mt-4 pt-4 flex flex-col flex-1 min-h-[200px]">
    <h4 className="text-lg font-semibold mb-2">Comments</h4>
   
    {comments[tutorial?.id]?.map(comment => (
      <div key={comment?.id} className="mt-4">
          {editCommentId==comment?.id?''
          :   <div className="flex justify-between items-center">
            <p className="text-gray-800">{comment?.content}</p>
            <div className="flex gap-2">
              <IconButton
                icon={<EditIcon />}
                aria-label="Edit Comment"
                onClick={() => openCommentEditModal(comment?.id, comment?.content)}
                size="sm"
              />
              <IconButton
                icon={<DeleteIcon />}
                aria-label="Delete Comment"
                onClick={() => handleDeleteComment(comment?.id)}
                size="sm"
                colorScheme="red"
              />
            </div>
          </div>}

       
      </div>
    ))}
  <Addcomments selectedColor={selectedColor} setComments={setComments} comments={comments} tutorial={tutorial}/>

  </div>
<Modal isOpen={isCommentEditModalOpen} onClose={closeCommentEditModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Comment</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              type="text"
              value={editCommentText}
              onChange={(e) =>setEditCommentText(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Edit your comment..."
            />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={()=>saveEditedComment(tutorial)}>
              Save
            </Button>
            <Button variant="ghost" onClick={closeCommentEditModal}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

  {isEditModalOpen? <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg mx-4 p-6">
        <button 
onClick={()=>setEditModalOpen(false)}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 className="text-xl font-semibold mb-4">Edit Tutorial</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Title</label>
            <input
              type="text"
              placeholder="Title"
              value={currentTutorial?.title || ''}
              onChange={(e) => setCurrentTutorial({ ...currentTutorial, title: e.target.value })}
              className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Description</label>
            <textarea
              placeholder="Description"
              value={currentTutorial?.description || ''}
              onChange={(e) => setCurrentTutorial({ ...currentTutorial, description: e.target.value })}
              className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              rows="4"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Published</label>
            <input
              type="text"
              placeholder="Published"
              value={currentTutorial?.published || ''}
              onChange={(e) => setCurrentTutorial({ ...currentTutorial, published: e.target.value })}
              className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleUpdateTutorial}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Save
            </button>
            <button
              type="button"
              onClick={()=>setEditModalOpen(false)}
              className="ml-2 bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>:``}
 
</div>
}):''}
            </div>
         
            <div className="mb-4 flex flex-col w-full gap-[40px] mt-[40px]">
              <h2 className="text-2xl font-bold">Add Tutorial</h2>
              <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                    Published Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter the title"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                    Description
                  </label>
                  <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter the description"
                    rows="4"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="published">
                    Published
                  </label>
                  <input
                    type="text"
                    id="published"
                    value={published}
                    onChange={(e) => setPublished(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter published status"
                    required
                  />
                </div>
                <div className="flex items-center justify-between">
                  <button
                  style={{background:selectedColor}}
                    type="submit"
                    className=" text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Add Tutorial
                  </button>
                </div>
              </form>

            </div>
          </div>
        </div>
        <Footer selectedColor={selectedColor}/>
      </ChakraProvider>

    </div>
  );
}

export default App;
