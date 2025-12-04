import { useEffect, useState } from "react"
import { Container, Row, Col, Form } from "react-bootstrap"
import Job from "./Job"
import { useDispatch, useSelector } from "react-redux"
import { fetchJobsAction, setSearchResultsAction } from "../redux/actions"

const MainSearch = () => {
  const [query, setQuery] = useState("")

  const dispatch = useDispatch()

  const jobs = useSelector((state) => state.search.results)
  const loading = useSelector((state) => state.search.loading)
  const error = useSelector((state) => state.search.error)

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(fetchJobsAction(query))
  }

  useEffect(() => {
    dispatch(setSearchResultsAction([]))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Remote Jobs Search</h1>
        </Col>

        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>

        <Col xs={10} className="mx-auto mb-5">
          {loading && (
            <div className="d-flex justify-content-center my-4">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}

          {error && <p style={{ color: "red" }}>Errore: {error}</p>}

          {!loading &&
            jobs.map((jobData) => <Job key={jobData._id} data={jobData} />)}
        </Col>
      </Row>
    </Container>
  )
}

export default MainSearch
