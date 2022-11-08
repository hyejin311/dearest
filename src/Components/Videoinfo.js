import '../index.css';
import $ from 'jquery';
import Video01 from '../img/video01.jpg';
import Video02 from '../img/video02.jpg';
import Video03 from '../img/video03.jpg';
import Video04 from '../img/video04.jpg';
import Video05 from '../img/video05.jpg';
import Video06 from '../img/video06.jpg';
import Video07 from '../img/video07.jpg';
import Video08 from '../img/video08.jpg';

function Videoinfo(){
    return(
        <div className="videoframe">

        <div className='prevbtn'>
        <button className='prev'>Prev</button></div>
        <div className='nextbtn'>
        <button className='next'>Next</button></div>

        <div className='video'>
        <div className="videoimg">
            <a href="https://www.youtube.com/watch?v=f7c9ghUXejY">
            <img src={Video01} alt="비디오1"/></a>

            <a href="https://www.youtube.com/watch?v=Nu2iC44BpR0">
            <img src={Video02} alt="비디오2"/></a>
        </div>

        <div className="videoimg">
            <a href="https://www.youtube.com/watch?v=xDmODAL2OMk">
            <img src={Video03} alt="비디오3"/></a>

            <a href="https://www.youtube.com/watch?v=_md16sTcnPM">
            <img src={Video04} alt="비디오4"/></a>
            </div>

            <div className="videoimg">
            <a href="https://www.youtube.com/watch?v=o4tw2V2_oY8">
            <img src={Video05} alt="비디오5"/></a>

            <a href="https://www.youtube.com/watch?v=-Qg5km1kpGE">
            <img src={Video06} alt="비디오6"/></a>
            </div>

            <div className="videoimg">
            <a href="https://www.youtube.com/watch?v=IDD5_z3kKCU">
            <img src={Video07} alt="비디오7"/></a>

            <a href="https://www.youtube.com/watch?v=TlBR8DsUYYk">
            <img src={Video08} alt="비디오8"/></a>
            </div>
        </div>
        </div>   
    )
}

let oneFrame=1;

$('.next').on('click',function(){
        $('.video').css('transform','translateX(-' +oneFrame+ '000px)');
        oneFrame+=1;
});

    $('.prev').on('click',function(){
        if(oneFrame===4){
            $('.video').css('transform','translateX(-2000px)');
            oneFrame -=1;
        }else if(oneFrame===3){
            $('.video').css('transform','translateX(-1000px)');
            oneFrame-=1;
        }else if(oneFrame===2){
            $('.video').css('transform','translateX(0px)');
            oneFrame-=1;
        }else return;
});

export default Videoinfo;