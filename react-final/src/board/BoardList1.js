import React,{useState,useEffect, useCallback} from "react";
import { Link, useParams } from "react-router-dom";
import '../App.css';
import axios from "axios";
import BoardRow from "./BoardRow";

    const BoardList1=()=>{
        const [data,setData]=useState('');

        //현재 페이지 번호
        const {currentPage}=useParams();
        
        //url 선언
        let pagelistUrl=process.env.REACT_APP_SPRING_URL+"board/pagelist?currentPage="+currentPage;
        let photoUrl=process.env.REACT_APP_SPRING_URL+"save/";

        //시작시 호출되는 함수
        const pageList=useCallback(()=>{
            axios.get(pagelistUrl)
            .then(res=>{
                setData(res.data);
                console.log(res.data)
            })
        },[pagelistUrl])
 
   
        
        useEffect(()=>{
            pageList();
        },[pageList,currentPage]);

        return(
            <div style={{width:'1000px', marginTop:'30px'}}>

                총 {data.totalCount} 개의 게시물이 있습니다.
                
                <br/>
                <div>
                    <table className="table table-bordered" style={{width:'1000px'}}>
                        <thead>
                            <tr style={{backgroundColor:'#ddd'}}>
                                <th width='50'>번호</th>
                                <th width='300'>제목</th>
                                <th width='50'>작성자</th>
                                <th width='50'>조회</th>
                            </tr>
                        </thead>
                        <tbody>  
          
                    {
                        data && data.list.map((row, idx) => (
                                <BoardRow key={idx} row={row} idx={idx} photoUrl={photoUrl}/>
                        ))
                     }  

     
                        </tbody>
                    </table>

  {/*페이징*/}
  <div style={{width:'700px', textAlign:'center',marginLeft:"350px",}}>
                <ul claasName="pagination">
                {
                        (data.startPage>1?
                        <li style={{float:"left"}}><Link to={`/board/list/${data.endPage-1}`}>이전</Link></li>:'')
                    }
                    {
                        data.parr && data.parr.map(n=>{
                            const url="/board/list/"+n;
                            return(
                                <li style={{float:"left",marginLeft:"15px"}}>
                                    <Link to={url}><b style={{color:n==currentPage?'red':'black'}}>
                                        {n}</b></Link>
                                </li>
                            )
                        })
                    }
                    {
                        (data.endPage<data.totalPage?
                        <li style={{float:"left",marginLeft:"15px"}}><Link to={`/board/list/${data.endPage+1}`}>다음</Link></li>:'')
                    }
                </ul>
            </div>
        </div>
            </div>
        )
    }
export default BoardList1;