import React, { Component } from 'react';
import {getUsers} from '../../api/index';
import Spiner from '../../components/Spiner';
import DataProvider2 from '../../components/DataProvider2';

class LoaderPade2 extends React.Component {

    render() {
        return (
            <div>
                <DataProvider2 loadData={() => getUsers(30,1)}>
                  
                    {(state) => {
                        const {data, isFetching, error} = state;
                        console.log(state);
                        return (
                            <>
                                {error && <dir>Error .....</dir>}
                                {isFetching && <Spiner />}
                                <ol>
                                    {data.map((users) => <li  key={users.login.uuid}> {users.name.first} {users.name.last}.....{users.gender} .... {users.email}</li>)}
                                </ol>

                            </>
                        )
                    }}
                </DataProvider2>
                
            </div>
        )
    }
}

export default LoaderPade2;
