import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { NgbDatepickerModule, NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { OperatorFunction, Observable, map, switchMap } from 'rxjs';
import { ToasttService } from 'src/app/shared/components/toast/toastt.service';
import { MediumService } from '../medium.service';


@Component({
  selector: 'app-insert-post',
  templateUrl: './insert-post.component.html',
  styleUrls: ['./insert-post.component.css']
})
export class InsertPostComponent implements OnInit {

  constructor(private mediumService: MediumService, 
    private ngbCalendar:NgbCalendar,
    private toasttService: ToasttService){ }
  authorForm!:FormGroup
  date=faCalendar
  categories:any
  selectedCategory:any
  selectedFile:any
  todayDate!:NgbDateStruct
  validSlug = false
  tags=["tag1","tag2","newtag"]
  selectedTags:any=[]
  selectedTags2:any=[]


  ngOnInit(): void {
    this.getCategories();
    this.createForm();
    this.todayDate = this.ngbCalendar.getToday();
    
  }

  createForm(){
    this.authorForm=new FormGroup({
      title:new FormControl('',[Validators.required]),
      description:new FormControl('',[Validators.required]),
      shortDescription:new FormControl('',[Validators.required]),
      category:new FormControl('',[Validators.required]),
      tags:new FormControl(),
      scheduleDate:new FormControl(this.todayDate),
      slug:new FormControl('',[Validators.required]),
      file:new FormControl('',[Validators.required])
    })
  }

  onSubmit(authorForm:any):void{
    console.log("submitted",authorForm)
  }
  Author = {
    title:'',
    shortDescription:'',
    description:'',
    dropdownBasic1:'',
    slug:'',
  }

  submitForm(){
    this.validateSlug()
    console.log(this.authorForm)
    this.generateBody();
  }
  getCategories(){
    this.mediumService.getCategories().subscribe((data)=>{
      this.categories=data
      console.warn(this.categories)
    })
  }

  selectCategory(category:any){
    this.authorForm.patchValue({
      category: category.CategoryID
    })
    this.selectedCategory = category.name
   
  }

  // this.selectedFile will take the file as input and pass it to the backend to insert into the uploads folder.
  uploadFile(){
    this.mediumService.uploadFile(this.selectedFile).subscribe((value:any)=>{
      const body = this.generateBody()
      this.mediumService.insertPost(body).subscribe(()=>console.log("done"))
    })
  }

  validateSlug(){
    const slug = this.authorForm.get('slug')?.value
    this.mediumService.validateSlug(slug).subscribe((value:any)=>
      {this.validSlug=value.validSlug
        console.warn(this.validSlug);

        // we are writing this inside subscribe because everthing is depend upon object is valid or not then we will do futher operations.
        if(this.validSlug)
        {
          //insert logic
          // const body = this.generateBody()
          // console.warn(body)
          // this.mediumService.insertPost(body).subscribe(()=> console.warn("done"));
          this.uploadFile()
        }
        else{
          //error
          this.toasttService.show({textOrTpl:'invalid slug',classname:'bg-danger',delay:20000})
          alert("error")
        }

    });
  

  }
  // Multi-part data encoding to convert the data into blog (whenever we deal with the files).

  selectFile(event:any){
    console.warn(event.target.files);
    this.selectedFile = event.target.files[0]
  }




  // Pipe will join multiple operators into one. (It will pass data as a sequence)
  // Map will take one input and give one output.
  // search: OperatorFunction<string, string[]> = (text$: Observable<string>) => {
  //   text$.pipe(
  //     map((value:string) =>this.categories.filter((elem:any)=>elem===value))
  //   )
  // }
  
  formatInput2(value:any){
    return value.TagName
  }
	search: OperatorFunction<string,string[]> = ($text: Observable<string>) => $text.pipe(switchMap((value)=>this.mediumService.matchTags(value)))

  select($event:any){
    //$event.preventDefault()
      console.warn($event)
      const selectedTag = $event.item.TagName;
      if(!this.selectedTags.includes(selectedTag)){
        this.selectedTags.push(selectedTag)
      }
    //  this.selectedTags.push($event.item.Tagname)
      console.warn(this.selectedTags)
      this.authorForm.patchValue({tags:""})
  }

  generateBody():any{
    const body={
      ...this.authorForm.value,
      authorID: 1,
      categoryID: this.authorForm.get('category')?.value,
      shortDescription: this.authorForm.get('shortDescription')?.value,
      description: this.authorForm.get('description')?.value,
      tags: this.selectedTags.join(","), //It is overridding the existed one.
      scheduledYN: 0,
      fileName:this.selectedFile.name
    }
    return body
  }
  
  



}
