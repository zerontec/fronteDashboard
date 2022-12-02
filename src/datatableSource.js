// import './components/datatable/datatable.scss'

export const userColumns =[

    { field: 'id', headerName: 'ID', width: 70 },
    {filed: "user", headerName:"User", width:230,
     renderCell:(params)=> {
return(
<div className="cellWithImg">
<img className='cellImg' alt="avatar" src={params.row.img}/>
{params.row.username}
</div>

)

}

    },

    {
        field:'email', headerName:"email", width:230  
},
{
    field:'age',
    hederName:'Age',
    width:100 ,
},
{
    field:'status',
    hederName:'Status',
    width:160 ,
    renderCell:(params)=> {
        return(
            <div className={`cellWithStatus${params.row.status}`}>{params.row.status} </div>
        )

    }
},

 
 


 

]

export const userRows = [
{


id:1,
username:'Snow',
img:"https://images.pixels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&drp=2&w=500",
status:"pending",
email:"1snow@gmail.com",
age:35,

},
{
id:2,
username:'Rainira',
img:"https://images.pixels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&drp=2&w=500",
status:"active",
email:"1snow@gmail.com",
age:36,

},
{
id:3,
username:'Daineris',
img:"https://images.pixels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&drp=2&w=500",
status:"active",
email:"1snow@gmail.com",
age:31,

},
{
id:4,
username:'Cerci',
img:"https://images.pixels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&drp=2&w=500",
status:"pending",
email:"1snow@gmail.com",
age:30,

},
{
id:5,
username:'Sansa',
img:"https://images.pixels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&drp=2&w=500",
status:"pending",
email:"1snow@gmail.com",
age:35,

},
{
id:6,
username:'jaimi',
img:"https://images.pixels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&drp=2&w=500",
status:"active",
email:"1snow@gmail.com",
age:35,

},





]