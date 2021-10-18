import {useEffect,useState} from "react";

const Gallery = () => {

    const [galleryArray,setGallery] = useState([]);
    const [pageArray, setPage] = useState(1)

    const loadPiscsum = () => {
        fetch("https://picsum.photos/v2/list?page="+pageArray+"&limit=6")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setGallery(data);
            })
    }

    const Pagination = () => (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                <li className={"page-item " + (pageArray===1?"disabled":null)} >
                    <a className="page-link" onClick={() => pageArray > 1 ? setPage(pageArray - 1):null}>Précédent</a>
                </li>
                <li className="page-item active"><a className="page-link" onClick={() => setPage(pageArray)}  href="#">{pageArray} </a></li>
                <li className="page-item"><a className="page-link" onClick={() => setPage(pageArray + 1 )} href="#">{pageArray +1} </a></li>
                <li className="page-item"><a className="page-link" onClick={() => setPage(pageArray + 2)} href="#">{pageArray + 2} </a></li>
                <li className="page-item">
                    <a className="page-link" onClick={() => setPage(pageArray + 1)} href="#">Suivant</a>
                </li>
            </ul>
        </nav>
    )

    useEffect(()=>{
        loadPiscsum()
    },[pageArray])

    const ListImages = () => (
        <div className="row">
            {
                galleryArray.map((img) => {
                    const urlImg = "https://picsum.photos/id/" + img.id + "/640/420"
                    return (
                        <div key={img.id} className="col-12 col-md-4">
                            <a href={img.url} target="_blank" rel="norefferer">
                            <img className="img-fluid mb-3" src={ urlImg } alt="image1"/>
                            </a>
                            <h4 className="text-center">{img.author}</h4>
                        </div>
                    )
                })
            }
        </div>
    )

    return (
        <section>
            <div className="container-fluid">
                <div className='row'>
                    <div className="col-12">
                        <h1>Galerie</h1>
                        <p>
                           quos quod eos unde tempore ut sint laboriosam. Non illum quas sed culpa deserunt ut pariatur repudiandae ab reprehenderit minus ut possimus animi.
                        </p>
                    </div>
                    <div className="col-12">
                        <ListImages />
                    </div>
                    <div className="col-12">
                        <Pagination />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Gallery