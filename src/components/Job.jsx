import { Row, Col, Modal, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addFavouriteAction, removeFavouriteAction } from "../redux/actions"

const Job = ({ data }) => {
  const dispatch = useDispatch()
  const favourites = useSelector((state) => state.favourites.content)

  // controlliamo se questa company è già nei preferiti
  const isFavourite = favourites.includes(data.company_name)

  const [showModal, setShowModal] = useState(false)

  return (
    <Row
      className="mx-0 mt-3 p-3 align-items-center"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
      <Col xs={5}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
        <i
          className={
            isFavourite ? "bi bi-heart-fill text-danger" : "bi bi-heart"
          }
          style={{
            fontSize: "1rem",
            cursor: "pointer",
            marginLeft: "8px",
          }}
          onClick={() => {
            if (isFavourite) {
              setShowModal(true)
            } else {
              dispatch(addFavouriteAction(data.company_name))
            }
          }}
        ></i>
      </Col>

      <Col xs={7}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>

      {/* MODALE DI CONFERMA */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Rimuovere dai preferiti?</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Vuoi davvero rimuovere <strong>{data.company_name}</strong> dai
          preferiti?
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Annulla
          </Button>

          <Button
            variant="danger"
            onClick={() => {
              dispatch(removeFavouriteAction(data.company_name))
              setShowModal(false)
            }}
          >
            Rimuovi
          </Button>
        </Modal.Footer>
      </Modal>
    </Row>
  )
}

export default Job
