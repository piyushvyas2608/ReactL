import {useState , useEffect} from 'react';
export default function User(){
    const [User,setUser] = useState([""]);
    const fetchData= ()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            return response.json();
        }).then((data)=>{
            let employ = data.results
            setUser(employ)
        })
    }
    useEffect(()=>{
        fetchData();
    },[])
    return(
        <>
        <div className="row">
            {User.map(data=>(
            <div class="card" style={{width: "22rem"}} key={data.id.value}>
                <img src={data.picture.large} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{data.name.first + " " + data.name.last}</h5>
                    <p class="card-text">{data.location.city + ", " + "data.location.state"}</p>
                    <br/>
                    <span className='phone'>{data.phone}</span>
                </div>
            </div>
            ))}
        </div>
        </>
    )
}