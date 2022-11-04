import '../index.css';
import frank from '../img/frank.jpg';
import byebye from '../img/byebye.jpg';
import loveuon from '../img/loveuon.jpg';
import maybe from '../img/maybe.jpg';
import every from '../img/every.jpg';
import tellusboutyourself from '../img/tellusboutyourself.jpg';
import justwalk from '../img/justwalk.jpg';
import fish from '../img/fish.jpg';

function Albuminfo(){
    return(
        <>
         <div className='albumbook'>
    <div id='albuminfo'>
        <div className='songimg'>
        <img src={frank} alt="frank"/>
        </div>

        <div className='songinfo'>
            <p>Frank</p>
            <p className='singername'>백예린 (Yerin Baek)</p>
        <dl>
            <dt>발매일</dt>
            <dd>2019.12.10</dd>
            <dt>장르</dt>
            <dd>R&B/Soul</dd>
            <dt>발매사</dt>
            <dd>Dreamus</dd>
            <dt>기획사</dt>
            <dd>블루바이닐</dd>
        </dl>
    </div>
        </div>

        <div id='albuminfo'>
        <div className='songimg'>
        <img src={byebye} alt="byebyemyblue"/>
        </div>

        <div className='songinfo'>
            <p>Bye bye my blue</p>
            <p className='singername'>백예린 (Yerin Baek)</p>
        <dl>
            <dt>발매일</dt>
            <dd>2016.06.20</dd>
            <dt>장르</dt>
            <dd>R&B/발라드</dd>
            <dt>발매사</dt>
            <dd>Dreamus</dd>
            <dt>기획사</dt>
            <dd>(주)JYP엔터테인먼트</dd>
        </dl>
    </div>
        </div>

        <div id='albuminfo'>
        <div className='songimg'>
        <img src={loveuon} alt="loveyouonchristmas"/>
        </div>

        <div className='songinfo'>
            <p>Love you on christmas</p>
            <p className='singername'>백예린 (Yerin Baek)</p>
        <dl>
        <dt>발매일</dt>
            <dd>2016.12.07</dd>
            <dt>장르</dt>
            <dd>발라드</dd>
            <dt>발매사</dt>
            <dd>Dreamus</dd>
            <dt>기획사</dt>
            <dd>(주)JYP엔터테인먼트</dd>
        </dl>
    </div>
        </div>

        <div id='albuminfo'>
        <div className='songimg'>
        <img src={maybe} alt="maybe"/>
        </div>

        <div className='songinfo'>
            <p>Our love is great</p>
            <p className='singername'>백예린 (Yerin Baek)</p>
        <dl>
            <dt>발매일</dt>
            <dd>2019.03.18</dd>
            <dt>장르</dt>
            <dd>R&B/Soul, 포크/블루스,재즈, 애시드/퓨전/팝</dd>
            <dt>발매사</dt>
            <dd>Dreamus</dd>
            <dt>기획사</dt>
            <dd>(주)JYP엔터테인먼트</dd>
        </dl>
    </div>
        </div>

        <div id='albuminfo'>
        <div className='songimg'>
        <img src={every} alt="maybe"/>
        </div>

        <div className='songinfo'>
            <p>Every letter I sent you</p>
            <p className='singername'>백예린 (Yerin Baek)</p>
        <dl>
            <dt>발매일</dt>
            <dd>2019.12.10</dd>
            <dt>장르</dt>
            <dd>R&B/Soul</dd>
            <dt>발매사</dt>
            <dd>Dreamus</dd>
            <dt>기획사</dt>
            <dd>블루바이닐</dd>
        </dl>
    </div>
        </div>

        <div id='albuminfo'>
        <div className='songimg'>
        <img src={tellusboutyourself} alt="maybe"/>
        </div>

        <div className='songinfo'>
            <p>tellusboutyourself</p>
            <p className='singername'>백예린 (Yerin Baek)</p>
        <dl>
            <dt>발매일</dt>
            <dd>2020.12.10</dd>
            <dt>장르</dt>
            <dd>R&B/Soul</dd>
            <dt>발매사</dt>
            <dd>Dreamus</dd>
            <dt>기획사</dt>
            <dd>블루바이닐</dd>
        </dl>
    </div>
        </div>

        <div id='albuminfo'>
        <div className='songimg'>
        <img src={justwalk} alt="justwalk"/>
        </div>

        <div className='songinfo'>
            <p>선물</p>
            <p className='singername'>백예린 (Yerin Baek)</p>
        <dl>
            <dt>발매일</dt>
            <dd>2021.09.10</dd>
            <dt>장르</dt>
            <dd>발라드</dd>
            <dt>발매사</dt>
            <dd>Dreamus</dd>
            <dt>기획사</dt>
            <dd>블루바이닐</dd>
        </dl>
    </div>
        </div>

        <div id='albuminfo'>
        <div className='songimg'>
        <img src={fish} alt="fish"/>
        </div>

        <div className='songinfo'>
            <p>물고기</p>
            <p className='singername'>백예린 (Yerin Baek)</p>
        <dl>
            <dt>발매일</dt>
            <dd>2022.05.24</dd>
            <dt>장르</dt>
            <dd>록/메탈</dd>
            <dt>발매사</dt>
            <dd>Dreamus</dd>
            <dt>기획사</dt>
            <dd>블루바이닐</dd>
        </dl>
    </div>
        </div>
        </div>
        </>
    )
}

export default Albuminfo;