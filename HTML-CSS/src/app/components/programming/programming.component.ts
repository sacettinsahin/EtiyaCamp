import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-programming',
  templateUrl: './programming.component.html',
  styleUrls: ['./programming.component.css']
})
export class ProgrammingComponent implements OnInit {

  courses = [
    {
      courseId : 1,
      courseImg : "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/Zk7d1MdoSJ6cEShVbfd0",
      courseHeader : "Yazılım Geliştirici Yetiştirme Kampı (C# + ANGULAR)",
      courseDetail : "2 ay sürecek Yazılım Geliştirici Yetiştirme Kampımızın takip, döküman ve duyurularını buradan yapacağız",
      instructorImg : "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:30,height:30/https://www.filepicker.io/api/file/GsqiGFGCRmuBuel0qqF3",
      instructorName : "Engin Demirog",
      price : "ÜCRETSİZ"
    },
    {
      courseId : 2,
      courseImg : "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/qi4s19xSKCmtaaRUqUFI",
      courseHeader : "Yazılım Geliştirici Yetiştirme Kampı (JAVA + REACT)",
      courseDetail : "2 ay sürecek Yazılım Geliştirici Yetiştirme Kampımızın takip, döküman ve duyurularını buradan yapacağız",
      instructorImg : "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:30,height:30/https://www.filepicker.io/api/file/GsqiGFGCRmuBuel0qqF3",
      instructorName : "Engin Demirog",
      price : "ÜCRETSİZ"
    },
    {
      courseId : 3,
      courseImg : "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/Zk7d1MdoSJ6cEShVbfd0",
      courseHeader : "Yazılım Geliştirici Yetiştirme Kampı (JavaScript)",
      courseDetail : "1.5 ay sürecek Yazılım Geliştirici Yetiştirme Kampımızın takip, döküman ve duyurularını buradan yapacağız",
      instructorImg : "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:30,height:30/https://www.filepicker.io/api/file/GsqiGFGCRmuBuel0qqF3",
      instructorName : "Engin Demirog",
      price : "ÜCRETSİZ"
    },
    {
      courseId : 4,
      courseImg : "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/BBLmG3XFTtm8XBTrzg4v",
      courseHeader : "Programlamaya Giriş için Temel Kurs",
      courseDetail : "2 ay sürecek Yazılım Geliştirici Yetiştirme Kampımızın takip, döküman ve duyurularını buradan yapacağız",
      instructorImg : "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:30,height:30/https://www.filepicker.io/api/file/GsqiGFGCRmuBuel0qqF3",
      instructorName : "Engin Demirog",
      price : "ÜCRETSİZ"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
