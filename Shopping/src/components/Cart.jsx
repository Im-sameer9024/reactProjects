/* eslint-disable no-unused-vars */
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
  MDBRipple,
  MDBRow,
  MDBTooltip,
  MDBTypography,
} from "mdb-react-ui-kit";

import { useDispatch, useSelector } from "react-redux";
import {inc,dec} from "../features/cartSlice"
export default function Cart() {
  const item = useSelector((state) => state.allCart);
  console.log(item);

  const dispatch = useDispatch()
  const itemCount = useSelector((state)=> state.allCart.count)

  

  
  return (
    <>
      {item.cart.map((list) => (
        <section key={list.id} className="h-100 gradient-custom">
          <MDBContainer className="py-5 h-100">
            <MDBRow className="justify-content-center my-4">
              <MDBCol md="8">
                <MDBCard className="mb-4">
                  <MDBCardBody>
                    <MDBRow>
                      <MDBCol lg="3" md="12" className="mb-4 mb-lg-0">
                        <MDBRipple
                          rippleTag="div"
                          rippleColor="light"
                          className="bg-image rounded hover-zoom hover-overlay"
                        >
                          <img
                            src={list.image}
                            className="w-100"
                          />
                          <a href="#!">
                            <div
                              className="mask"
                              style={{
                                backgroundColor: "rgba(251, 251, 251, 0.2)",
                              }}
                            ></div>
                          </a>
                        </MDBRipple>
                      </MDBCol>

                      <MDBCol lg="5" md="6" className=" mb-4 mb-lg-0">
                        <p>
                          <strong>{list.title}</strong>
                        </p>
                        <p>Price: ${list.price}</p>
                        <p>Rating:⭐{list.rating && list.rating.rate}</p>

                        <MDBTooltip
                          wrapperProps={{ size: "sm" }}
                          wrapperClass="me-1 mb-2"
                          title="Remove item"
                        >
                          <MDBIcon fas icon="trash" />
                        </MDBTooltip>

                        <MDBTooltip
                          wrapperProps={{ size: "sm", color: "danger" }}
                          wrapperClass="me-1 mb-2"
                          title="Move to the wish list"
                        >
                          <MDBIcon fas icon="heart" />
                        </MDBTooltip>
                      </MDBCol>
                      <MDBCol lg="4" md="6" className="mb-4 mb-lg-0">
                        <div
                          className="d-flex mb-4"
                          style={{ maxWidth: "300px" }}
                        >
                          <MDBBtn onClick={()=>dispatch(dec())} className="px-3 me-2">
                            <MDBIcon fas icon="minus" />
                          </MDBBtn>

                          <div className=" border border-black rounded-md flex justify-center items-center px-4">{itemCount}</div>

                          <MDBBtn onClick={()=> dispatch(inc())} className="px-3 ms-2">
                            <MDBIcon fas icon="plus" />
                          </MDBBtn>
                        </div>

                        <p className="text-start text-md-center">
                          <strong>{ itemCount*list.price}</strong>
                        </p>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>

                <MDBCard className="mb-4">
                  <MDBCardBody>
                    <p>
                      <strong>Expected shipping delivery</strong>
                    </p>
                    <p className="mb-0">12.10.2020 - 14.10.2020</p>
                  </MDBCardBody>
                </MDBCard>

                <MDBCard className="mb-4 mb-lg-0">
                  <MDBCardBody>
                    <p>
                      <strong>We accept</strong>
                    </p>
                    <MDBCardImage
                      className="me-2"
                      width="45px"
                      src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                      alt="Visa"
                    />
                    <MDBCardImage
                      className="me-2"
                      width="45px"
                      src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                      alt="American Express"
                    />
                    <MDBCardImage
                      className="me-2"
                      width="45px"
                      src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                      alt="Mastercard"
                    />
                    <MDBCardImage
                      className="me-2"
                      width="45px"
                      src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
                      alt="PayPal acceptance mark"
                    />
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="4">
                <MDBCard className="mb-4">
                  <MDBCardHeader>
                    <MDBTypography tag="h5" className="mb-0">
                      Summary
                    </MDBTypography>
                  </MDBCardHeader>
                  <MDBCardBody>
                    <MDBListGroup flush>
                      <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                        Products
                        <span>{itemCount*list.price}</span>
                      </MDBListGroupItem>
                      <MDBListGroupItem className="d-flex justify-content-between align-items-center px-0">
                        Shipping
                        <span>{10*itemCount}</span>
                      </MDBListGroupItem>
                      <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                        <div>
                          <strong>Total amount</strong>
                          <strong>
                            <p className="mb-0">(including VAT)</p>
                          </strong>
                        </div>
                        <span>
                          <strong>{(itemCount*list.price)+(10*itemCount)}</strong>
                        </span>
                      </MDBListGroupItem>
                    </MDBListGroup>

                    <MDBBtn block size="lg">
                      Go to checkout
                    </MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
      ))}
    </>
  );
}
