import React,{ useEffect, useState } from 'react';


import Modal from 'react-modal';
import { Link, useParams } from "react-router-dom";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react"; 
import 'swiper/css/navigation';
import SwiperCore, { Pagination, Navigation } from "swiper/core";

import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';


function AboutCompanyDetail({datas, setSelectedImgIndex}) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [openModalId, setOpenModalId] = useState(0);
    const [moduleId, setmoduleId] = useState(0);
    const [isNew, setIsNew] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        datas.map((el, index, data) => {
            if(id == el.id) {
                setmoduleId(index);
                setSelectedImgIndex(index)
                setIsNew(false);
            }
        })
    },[])

    var content = datas[moduleId].content;
    content = content.replace('</p>','');
    content = content.replace('<p>','');

    SwiperCore.use([Pagination, Navigation]);

    // JSON.parse(getItem('reviewData')).map((el, index, data) => {
    //     if(id == el.id) {
    //         //idx = index;
    //         flag = 1;
    //         // content = JSON.parse(getItem('reviewData'))[idx].content_text;
    //         // content = content.replace('</p>','');
    //         // content = content.replace('<p>','');
    //     }
    // })

    function handleModal(e) {
        setOpenModalId(e.target.id);
        setModalIsOpen(true);
    }

    return (
        <>
            <div className="detail_container">
                <div className="aboutCompany_detail_summary">
                    <img src={'/img/img-pop-board-m.png'}></img>
                    <div className="aboutCompany_detail_text">
                        <div className="aboutCompany_detail_title">
                            신입사원의 매너
                        </div>
                        <div>학습목표 : 야뱆얍쟈럅재ㅠ랴ㅐ쥽래ㅑㅠㅈ</div>
                        <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur deleniti alias at iusto! Quod voluptas quos exercitationem dolorem distinctio, velit ut? Pariatur omnis sequi reiciendis a eum suscipit necessitatibus itaque?</div>
                    </div>
                </div>
                <div className="detail_cardNews">	
                    <div className="detail_cardNews">	
                        <div className="detail_cardNews_title">학습 (마이크로러닝/카드뉴스)</div>	
                        {
                            modalIsOpen ?
                            null 
                            :
                            <Swiper
                                pagination={{ clickable: true }}
                                navigation={true}
                                slidesPerView={3}
                            >
                                <SwiperSlide>
                                    <img id="1" src="/img/cardNews1.png" onClick={handleModal} />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img id="2" src="/img/cardNews2.png" onClick={handleModal}/>
                                </SwiperSlide>
                                <SwiperSlide>Slide 3</SwiperSlide>
                                <SwiperSlide>Slide 4</SwiperSlide>
                            </Swiper>
                        }
                    </div>

                    <div className="detail_practice">	
                        <div style={{ marginBottom: 20 }}>	
                            <div className="detail_practice_title">생각해보기</div>	
                            <div className="detail_practice_desc">오늘 배운 내용에 대해 Review하며 배운 점, 느낀 점, 성찰할 점 등에 대해 자유롭게 적어봅시다.</div>	
                        </div>	
                        <div className="detail_practice_textArea">
                            { isNew ? '' : content }
                        </div>	
                        <div className="detail_practice_btnArea" to='edit'>	
                            <Link to="#">	
                                <button className='tempSaveBtn'>임시저장</button>	
                            </Link>	
                            <Link to="edit">	
                                <button className='writeBtn'>작성하기</button>	
                            </Link>	
                        </div>
                    </div>
                </div>
            </div>
            <Modal 
                className="cardnewsModal"
                isOpen={modalIsOpen}
                onRequestClose={()=> setModalIsOpen(false)} // 오버레이나 esc를 누르면 핸들러 동작
                ariaHideApp={false}
                style={{
                    overlay: {
                      position: "fixed",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: "rgba(15, 15, 15, 0.79)",
                    },
                    content: {
                      position: "absolute",
                      top: "150px",
                      left: "25%",
                      width: "50%",
                      height: "60%",
                      border: "1px solid #ccc",
                      background: "#fff",
                      overflow: "auto",
                      WebkitOverflowScrolling: "touch",
                      borderRadius: "4px",
                      outline: "none",
                      padding: "20px",
                    },
                  }}
            >
                <div className='ModalCards'>
                    {openModalId}
                    <button onClick={()=> setModalIsOpen(false)}>X</button>
                    <div className='ModalCards_Title'>카드뉴스</div>
                </div>
            </Modal>

        </>

    );
}

export default AboutCompanyDetail;