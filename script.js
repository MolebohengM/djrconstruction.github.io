import { Styles } from 'sveltestrap';
import 'bootstrap/dist/css/bootstrap.min.css';

  import {
    Button,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader
  } from 'sveltestrap';
  let open = false;
  const toggle = () => (open = !open);

 //Modal
  function openModal() {
    document.getElementById("myModal").style.display = "block";
  }

  function sendRequest() {
    // Add your logic to handle the request, e.g., send data to a server
    alert("Request sent!");
    document.getElementById("myModal").style.display = "none";
  }

  
