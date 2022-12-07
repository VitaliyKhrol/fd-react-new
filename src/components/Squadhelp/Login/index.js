import React, { Component } from "react";
import "../style.css";
// import { SCHEMA } from "../../schemas";
import { Formik, Form, Field, ErrorMessage } from "formik";

function Squadhelp(props) {
    const formikSubmit = (data, formikBag) => {
        console.log(data)
        formikBag.resetForm();
    };

    const initialValues = {
        FirstName: "",
        LastName: "",
        DisplayName: "",
        email: "",
        Password: "",
        PasswordConfirmation: "",
        Join:"",
        Squadhelp:"",
    };

    return (
        <Formik initialValues={initialValues} onSubmit={formikSubmit}>
            {(FormikProps) => {
                return (
                    <Form className="signInForm">
                        <header>
                            <h2>CREATE AN ACCORD</h2>
                            <p> We always keep your name and email address private. </p>
                        </header>

                        <div>
                            <label className="flex-row">
                                <label>
                                    <Field className="box" name="FirstName" placeholder="FirstName" />
                                </label>
                                <label>
                                    <Field className="box" name="LastName" placeholder="LastName" />
                                </label>
                            </label>

                            <label className="flex-row">
                                <label>
                                    <Field className="box" name="DisplayName" placeholder="DisplayName" />
                                </label>
                                <label>
                                    <Field className="box" name="email" placeholder="email" />
                                </label>
                            </label>

                            <label className="flex-row">
                                <label>
                                    <Field className="box" name="Password" placeholder="Password" />
                                </label>
                                <label>
                                    <Field className="box" name="PasswordConfirmation" placeholder="PasswordConfirmation" />
                                </label>
                            </label>

                            <label>
                                <label className="join">
                                    <Field type="radio" name="Join" required
                                        value="Join As a Buyer"
                                        />
                                    <p>
                                        I am looking for a Name, Logo or Tagline for my business, brand
                                        or product.
                                    </p>
                                </label>
                                <label className="join">
                                    <Field type="radio" name="Join" required
                                        value="Join As a Creative or Marketplace Seller"
                                         />
                                    <p>
                                        I plan to submit name ideas, Logo designs or sell names in
                                        Domain Marketplace.
                                    </p>
                                </label>
                            </label>

                            <label className="join2">
                                <Field type="checkbox" name="Squadhelp" required
                                    value="Allow SguadHelp"
                                />
                                <p>
                                    Allow Squadhelp to send marketing promotional offers from time to time.
                                </p>
                            </label>
                            <button className="Button-Create">Create accord</button>
                            <button className="Button-Sign">Sign up width Google</button>
                        </div>
                    </Form>
                )
            }}

        </Formik>
    );
}

export default Squadhelp;
