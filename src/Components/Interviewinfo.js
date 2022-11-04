import Inter01 from '../img/inter01.jpg';
import Inter02 from '../img/inter02.jpg';
import Inter03 from '../img/inter03.jpg';
import Inter04 from '../img/inter04.jpg';
import Inter05 from '../img/inter05.jpg';
import Inter06 from '../img/inter06.jpg';
import Inter07 from '../img/inter07.png';
import $ from 'jquery';
import '../index.css';

function Interviewinfo(){
    return(
        <div className='interview'>
        <div id='interviewinfo'>
        <div className='interimg'>
        <a href="https://www.vogue.co.kr/2022/05/27/%EB%B0%B1%EC%98%88%EB%A6%B0%EC%9D%98-%EC%98%81%EA%B0%90%EC%9D%80-%EC%9A%B0%EC%9A%B8%EC%97%90%EC%84%9C-%EC%98%A8%EB%8B%A4/">
        <img className="thumbnail" src={Inter01} alt="인터뷰1"/></a>
        </div>

        <div className='intertitle'>
        <p>백예린의 영감은 우울에서 온다</p>
    </div>
        </div>

        <div id='interviewinfo'>
        <div className='interimg'>
        <a href="https://hypebeast.kr/2020/12/baek-yerin-new-album-tellusboutyourself-release-info-interview">
        <img className="thumbnail" src={Inter02} alt="인터뷰2"/></a>
        </div>

        <div className='intertitle'>
        <p>"같이 행복해요 우리"</p>
    </div>
        </div>

        <div id='interviewinfo'>
        <div className='interimg'>
        <a href="https://baekyerin.tistory.com/77">
        <img className="thumbnail" src={Inter03} alt="인터뷰3"/></a>
        </div>

        <div className='intertitle'>
        <p>데이즈드 12월호 백예린 인터뷰</p>
    </div>
        </div>

        <div id='interviewinfo'>
        <div className='interimg'>
        <a href="https://eyesmag.com/posts/136792/Interview-for-The-Volunteers">
        <img className="thumbnail" src={Inter04} alt="인터뷰4"/></a>
        </div>

        <div className='intertitle'>
        <p>The Volunteers</p>
    </div>
        </div>

        <div id='interviewinfo'>
        <div className='interimg'>
        <a href="https://www.bbc.com/korean/news-51754782">
        <img className="thumbnail" src={Inter05} alt="인터뷰5"/></a>
        </div>

        <div className='intertitle'>
        <p>백예린 인터뷰</p>
    </div>
        </div>

        <div id='interviewinfo'>
        <div className='interimg'>
        <a href="https://www.elle.co.kr/article/51020">
        <img className="thumbnail" src={Inter06} alt="인터뷰6"/></a>
        </div>

        <div className='intertitle'>
        <p>백예린, 요즘 어떻게 지내?</p>
    </div>
        </div>

        <div id='interviewinfo'>
        <div className='interimg'>
        <a href="https://dive.hyundaicard.com/web/content/contentView.hdc?contentId=3174">
        <img className="thumbnail" src={Inter07} alt="인터뷰7"/></a>
        </div>

        <div className='intertitle'>
        <p>분홍빛 안개처럼</p>
    </div>
        </div>
        </div>
    )
}

$('.interimg').on('mouseenter',function(){
    $('.intertitle').css('display','block');
});

$('.interimg').on('mouseleave',function(){
    $('.intertitle').css('display','none');
});


export default Interviewinfo;