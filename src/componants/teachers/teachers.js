import './teachers.css'
import teacher from '../../Assets/teacher1.png'
import Card from '../home/card';
import { useState } from 'react';

export default function Teachers() {

    let showCards = true;
    let [courses, setCourses] = useState( 
        [
            {
                key:"0",
                class:"card course",
                img:"https://api.bassthalk.com/courses_images/vKlRaFtg4jj0Td0aCzJVFoDgZGa05UBohSC5AxS2.jpg",
                name:"الشهر الخامس (محمد صلاح - لغة عربية - 3 ثانوي )",
                info:"يناير 2024",
                isSub:"انت مشترك في هذا الكورس",
                editDate:"الثلاثاء، ٢٣ يناير ٢٠٢٤",
                publishDate:"السبت، ٣٠ ديسمبر ٢٠٢٣",
            },
            {
                key:"1",
                class:"card course",
                img:"https://api.bassthalk.com/courses_images/vKlRaFtg4jj0Td0aCzJVFoDgZGa05UBohSC5AxS2.jpg",
                name:"الشهر الخامس (محمد صلاح - لغة عربية - 3 ثانوي )",
                info:"يناير 2024",
                isSub:"انت مشترك في هذا الكورس",
                editDate:"الثلاثاء، ٢٣ يناير ٢٠٢٤",
                publishDate:"السبت، ٣٠ ديسمبر ٢٠٢٣",
            },
            {
                key:"2",
                class:"card course",
                img:"https://api.bassthalk.com/courses_images/vKlRaFtg4jj0Td0aCzJVFoDgZGa05UBohSC5AxS2.jpg",
                name:"الشهر الخامس (محمد صلاح - لغة عربية - 3 ثانوي )",
                info:"يناير 2024",
                isSub:"انت مشترك في هذا الكورس",
                editDate:"الثلاثاء، ٢٣ يناير ٢٠٢٤",
                publishDate:"السبت، ٣٠ ديسمبر ٢٠٢٣",
            },
            {
                key:"3",
                class:"card course",
                img:"https://api.bassthalk.com/courses_images/vKlRaFtg4jj0Td0aCzJVFoDgZGa05UBohSC5AxS2.jpg",
                name:"الشهر الخامس (محمد صلاح - لغة عربية - 3 ثانوي )",
                info:"يناير 2024",
                isSub:"انت مشترك في هذا الكورس",
                editDate:"الثلاثاء، ٢٣ يناير ٢٠٢٤",
                publishDate:"السبت، ٣٠ ديسمبر ٢٠٢٣",
            },
            {
                key:"4",
                class:"card course",
                img:"https://api.bassthalk.com/courses_images/vKlRaFtg4jj0Td0aCzJVFoDgZGa05UBohSC5AxS2.jpg",
                name:"الشهر الخامس (محمد صلاح - لغة عربية - 3 ثانوي )",
                info:"يناير 2024",
                isSub:"انت مشترك في هذا الكورس",
                editDate:"الثلاثاء، ٢٣ يناير ٢٠٢٤",
                publishDate:"السبت، ٣٠ ديسمبر ٢٠٢٣",
            },
        ]
    )
    let [otherCourses, setOtherCourses] = useState( 
        [
            {
                key:"5",
                class:"card other-course",
                img:"https://api.bassthalk.com/courses_images/ktgEiDKxLGPTMwYNxckUL9ycM4il1ipdohlp8TcB.jpg",
                name:"الاختبار الشامل الثاني- محمد صلاح 3ث (أونلاين)",
                info:"محتوى الامتحان:نحو: الوحدة الأولى - الوحدة الثانية (حتى اسم الآلة) + الوحدة الثالثة كاملةأدب: الاتجاه الوجدانيقراءة و نصوص (متحرر)تعبير: الأنماط ( ٣ - ٤ - ٥)قصة: الفصول ( ٣-٤ - ٥ -٦)بلاغة شاملة ( ما تم شرحه من بداية السنة)",
                isSub:"انت مشترك في هذا الكورس",
                editDate:"الجمعة، ٨ ديسمبر ٢٠٢٣",
                publishDate:"الاثنين، ٢٧ نوفمبر ٢٠٢٣",
            },
        ]
    )

    return(
        <div className='teachers-courses'>
            <div className='background'>
                <h3>محمد صلاح</h3>
            </div>
            <div className='teacher-img'>
                <img src={teacher}></img>
            </div>
            <section className='cards courses'>
                {showCards ? ( 
                    <>
                        {courses.map((course) => {
                            return(
                                <Card 
                                    id =   {course.id}
                                    img =  {course.img}
                                    class = {course.class}
                                    name = {course.name}
                                    info = {course.info}
                                    isSub = {course.isSub}
                                    editDate = {course.editDate}
                                    publishDate = {course.publishDate}
                                />
                            )
                        })}
                    </> )
                :(
                    <p>error 404</p>
                )}
            </section>
            <section className='cards other-courses'>
                {showCards ? ( 
                    <>
                        {otherCourses.map((course) => {
                            return(
                                <Card 
                                    id =   {course.id}
                                    img =  {course.img}
                                    class = {course.class}
                                    name = {course.name}
                                    info = {course.info}
                                    isSub = {course.isSub}
                                    editDate = {course.editDate}
                                    publishDate = {course.publishDate}
                                />
                            )
                        })}
                    </> )
                :(
                    <p>error 404</p>
                )}
            </section>
        </div>
    )
}