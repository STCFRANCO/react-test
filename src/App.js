import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter} from "reactstrap";
import { FaRegThumbsUp, FaPlus, FaBatteryHalf,  FaRegThumbsDown} from 'react-icons/fa';
import Contatos from './components/contatos';
import Relogio from './components/Relogio';




const data = [ 
 

  
];

class App extends React.Component {
  state = {
    data: data,
    form: {
      id: "",
      nome: "",
      telefone: "",
      Correio: ""
    }, 
    dataSearch: [],
    modalInsertar: false,
    modalActualizar: false,
    modalConfirmacion: false
  };

  handleChange = e =>{
    this.setState({
      form:{
        ...this.state.form,
        [e.target.name]: e.target.value,
      }
    })
  }
 
  //#region metodos de modales
  mostrarModalActualizar = (dato) => {
    this.setState({
      form: dato,
      modalActualizar: true,
    });
  };

  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };

  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
  };

  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  mostrarConfirmacion = (dato) => {
    this.setState({
      form: dato,
      modalConfirmacion: true
    });
    
  };

  cerrarConfirmacion = () =>{
    this.setState({ modalConfirmacion: false });
  }
//#endregion
  
  //#region CRUD
  insertar = () =>{
    let valorNuevo = this.state.form;
    valorNuevo.id = this.state.data.length + 1;
    let lista = this.state.data;
    lista.push(valorNuevo)
    this.setState({data: lista, modalInsertar: false})
  }
  
  editar = (dato) =>{
    let contador = 0;
    let lista = this.state.data;
    lista.map((registro)=>{
      if(dato.id === registro.id){
        lista[contador].nome = dato.nome;
        lista[contador].telefone = dato.telefone;
        lista[contador].Correio = dato.Correio;
      }
      contador++;
    });
    this.setState({data: lista, modalActualizar: false})
  }

  eliminar = (dato) =>{
    let contador = 0; 
    let lista = this.state.data;
    lista.map((registro) => { 
        if(registro.id === dato.id){
          lista.splice(contador, 1);
        }
         contador++;
      });
      this.setState({data: lista, modalConfirmacion: false});
  }

  filtrar = (e) =>{
    const { value } = e.target;
    let lista = this.state.data;
    const filtered = lista.filter(fltr => fltr.nome.toLowerCase().includes(value.toLowerCase()));
    
    // this.setState({data: filtered});
    this.setState({ dataSearch: !value ?  [] : filtered});   
  }
  //#endregion

  render() {  
    return (
      <>     
        <nav className="nav">

            <ol>Inovação  Social</ol>
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         
            <form  class="d-flex">
              
              <input  onChange={this.filtrar} type="search" placeholder="Search" aria-label="Search"></input>              
            </form>
            <Button><FaBatteryHalf/></Button><ul><Relogio /></ul>
           
        </nav>        
     
        <Container className='bloque'>  
        <h1 className='titulo'>Catalogo de Cursos</h1>
   <div className="produto">
      <img src={require('./components/img/logo.jpg')} />
   
         <h1>Agente de Viagem</h1>
         <p>Curso</p>
         <p className="price">GRATIS</p>
       
         <button> DESCRIÇÃO</button> 

        <a href="#" className="btn">Registro</a>
        </div>

        <div className="produto">
      <img src={require('./components/img/logo.jpg')} />
   
         <h1>Agente de Viagem</h1>
         <p>Curso</p>
         <p className="price">GRATIS</p>
       
         <button> DESCRIÇÃO</button> 

        <a href="#" className="btn">Registro</a>
        </div>

        <div className="produto">
      <img src={require('./components/img/logo.jpg')} />
   
         <h1>Agente de Viagem</h1>
         <p>Curso</p>
         <p className="price">GRATIS</p>
       
         <button> DESCRIÇÃO</button> 

        <a href="#" className="btn">Registro</a>
        </div>

        </Container>
        <Container className='caixa'>  
        <br />
            <h1 className='titulo'> Cursos</h1>
             
            <Button className='user' onClick={()=>this.mostrarModalInsertar()}><FaPlus/></Button>
           
           
          <Contatos
          
            data = {this.state.dataSearch.length ? this.state.dataSearch : this.state.data}
            eliminar = {this.mostrarConfirmacion}
            editar = {this.mostrarModalActualizar}
          />   
          <br/>
          <br/> 
        </Container>


    <div class="back">
      <div class="Sd">
        <div>
        <img src={require('./components/img/logo.jpg')} />


          <h1>ESTUDOS</h1>
          <p>
            Fui formado  em 2013, através de estúdos
            na Universidade Bolivariana da Venezuela. Eu fiz estudo na area de
            contabilidade. realizando várias induções e alguns workshops para o
            melhor desenvolvimento no desenvolvimento das tarefas atribuídas nos
            diferentes cargos exercidos. No mês de Outubro de 2019, juntamente
            com minha esposa e minha filha, decidimos deixar a Venezuela em
            busca de uma oportunidade, a fim de alcançar a melhoria econômica e
            social, já que em nosso país as coisas estavam em declínio pela
            situação econômica e política.
          </p>
        </div>
      </div>
    </div>



        <footer class="footer">
      <p>Copyright (c) 2022 All rights reserved </p>
    </footer> 

        {/* Modal insertar */}
        <Modal isOpen = {this.state.modalInsertar}>
          <ModalHeader>
            <div>
              <h3>Novo Curso</h3>
            </div>       
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>id:</label> 
              <input className="form-control" readOnly type= "text" value = {this.state.data.length+1}/>
            </FormGroup> 

            <FormGroup>
              <label>Nome</label> 
              <input className="form-control" name="nome" type= "text" onChange={this.handleChange}/>
            </FormGroup> 

            <FormGroup>
              <label>Telefone</label> 
              <input className="form-control" name="telefone" type= "text" onChange={this.handleChange}/>
            </FormGroup> 
            <FormGroup>
              <label>E-mail</label> 
              <input className="form-control" name="Correio" type= "text" onChange={this.handleChange}/>
            </FormGroup> 
          </ModalBody>

          <ModalFooter>
            <Button color="primary" onClick={() => this.insertar()}><FaRegThumbsUp /></Button>
            <Button color="danger" onClick={() => this.cerrarModalInsertar()}> <FaRegThumbsDown /></Button>
          </ModalFooter>
        </Modal>


        {/* Modal actualizar */}
        <Modal isOpen={this.state.modalActualizar}>
          <ModalHeader>
            <div>
                <h3>Editar Curso</h3>
            </div>       
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>id:</label> 
              <input className="form-control" readOnly type= "text" value={this.state.form.id}/>
            </FormGroup> 

            <FormGroup>
              <label>Nome</label> 
              <input className="form-control" name="nome" type= "text" onChange={this.handleChange} value={this.state.form.nome}/>
            </FormGroup> 

            <FormGroup>
              <label>Telefone</label> 
              <input className="form-control" name="telefone" type= "text" onChange={this.handleChange} value={this.state.form.telefone}/>
            </FormGroup> 
            <FormGroup>
              <label>E-mail</label> 
              <input className="form-control" name="Correio" type= "text" onChange={this.handleChange} value={this.state.form.Correio}/>
            </FormGroup> 
          </ModalBody>

          <ModalFooter>
            <Button color="primary" onClick={()=>this.editar(this.state.form)}><FaRegThumbsUp /></Button>
            <Button color="danger" onClick={()=>this.cerrarModalActualizar()}> <FaRegThumbsDown /></Button>
          </ModalFooter>
        </Modal>
        <Modal isOpen = {this.state.modalConfirmacion}>
          <ModalHeader>
            <h4> Deseja excluir este registro? </h4>
          </ModalHeader>
          <ModalBody>
            <Button color="success" onClick={()=> this.eliminar(this.state.form)}><FaRegThumbsUp /> </Button> {"   "}
            <Button color="danger" onClick={()=>this.cerrarConfirmacion()}> <FaRegThumbsDown /></Button>
          </ModalBody>        
        </Modal>      
      </>
    );
  }
}

export default App;