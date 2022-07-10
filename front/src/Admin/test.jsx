import React, {Component} from 'react';
import {useEffect, useState} from "react";
import Admin from "./Admin.css"
import AdminLayout from "../Route/AdminLayout";
import axios from "axios";
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';

function test() {
    return (
        <div>
            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
            <h1>야</h1>
        </div>

    );

};
export default test;