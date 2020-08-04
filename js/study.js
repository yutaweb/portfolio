'use strict';

{
  //上から下に落ちてくるアニメーションとしっかりとcover-slideが利くようにする
  const width=window.innerWidth;

  //Study for Web
  const box_item1=document.querySelector("#box-item1");
  const box_item2=document.querySelector("#box-item2");
  const box_item3=document.querySelector("#box-item3");
  const box1=document.querySelector("#box1");
  const box2=document.querySelector("#box2");
  const box3=document.querySelector("#box3");

  if(width<=768){
    box1.addEventListener("click",()=>{
      box_item1.style.display="block";
      box_item2.style.display="none";
      box_item3.style.display="none";
    });
    box2.addEventListener("click",()=>{
      box_item1.style.display="none";
      box_item2.style.display="block";
      box_item3.style.display="none";
    });
    box3.addEventListener("click",()=>{
      box_item1.style.display="none";
      box_item2.style.display="none";
      box_item3.style.display="block";
    });
  }

  //English lesson

  const box_item01=document.querySelector("#box-item01");
  const box_item02=document.querySelector("#box-item02");
  const box_item03=document.querySelector("#box-item03");
  const box01=document.querySelector("#box01");
  const box02=document.querySelector("#box02");
  const box03=document.querySelector("#box03");
  if(width<=768){
    box01.addEventListener("click",()=>{
      box_item01.style.display="block";
      box_item02.style.display="none";
      box_item03.style.display="none";
    });
    box02.addEventListener("click",()=>{
      box_item01.style.display="none";
      box_item02.style.display="block";
      box_item03.style.display="none";
    });
    box03.addEventListener("click",()=>{
      box_item01.style.display="none";
      box_item02.style.display="none";
      box_item03.style.display="block";
    });
  }
}