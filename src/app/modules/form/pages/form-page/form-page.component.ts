import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogComponent } from '@modules/form/components/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'iems-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent implements OnInit {

  formSubmit:boolean = false;
  regex = /\S$/;
  formValidation = this.fb.group({
      nombres: ['',[
        Validators.required,
        Validators.pattern(this.regex)
      ]],
      apellidos:['',[
        Validators.required,
        Validators.pattern(this.regex)

      ]],
      fumas: [null,[
        Validators.required
      ]],
      actualmentePracticasLectura: [null,[
        Validators.required
      ]],
      librosLeidosUltimosTresMeses: this.fb.array([]),

      // estadoCivil: new FormControl('',[
      //   Validators.required
      // ]),
      
      
    })
  constructor(private fb:FormBuilder, public dialog: MatDialog) { }

  ngOnInit(): void {
  
  }


  cleanBook() {
    this.books.clear();
  }

  addBook(event:any) {
    event.preventDefault();
    const bookForm = this.fb.group({
      title: ['', Validators.required],
    });

    this.books.push(bookForm);
  }

  deleteBook(bookIndex:number){
    this.books.removeAt(bookIndex);

  }

  get books():FormArray{
    return this.formValidation.get('librosLeidosUltimosTresMeses') as FormArray;
  }
 
  get data() {
    return this.formValidation.controls;
  }


  openDialog(message:string): void {
    this.dialog.open(DialogComponent, {
      data: { message: message},
    });
  }

  sendForm() {

    this.formSubmit = true;

    if(this.formValidation.valid) {
      this.openDialog("Tus datos son correctos")
      console.log("enviar alerta valida")
    }else{
      this.openDialog("Tus datos son incorrectos verifica tus datos")
      console.log("enviar alerte invalida")
    }

  }

}
