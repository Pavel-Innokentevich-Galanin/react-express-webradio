import axios from 'axios';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlay,
    faArrowRight,
} from '@fortawesome/free-solid-svg-icons';

import "./App.css";
import styles from "./App.module.css";

export default function App() {
    const [RadioData, SetRadioData] = useState({});
    const [RadioIndex, SetRadioIndex] = useState(-1);
    const [RadioName, SetRadioName] = useState("Radio name");
    const [RadioSrcImage, SetSrcImage] = useState("");
    const [RadioDescription, SetRadioDescription] = useState("Description");

    function get_json() {
        const URL = `${process.env.REACT_APP__API_URL}:${process.env.REACT_APP__API_PORT}/gpi-get-radio`;
        axios.get(URL)
        .then(function(response) {
            if (response.data === "err") {
                alert("API return empty array");
                return;
            }

            let arr = response.data;
            console.log(arr);
            
            if (arr[0]) {
                console.log(arr[0]);
                SetRadioData(arr);
                SetRadioName(arr[0]["station"]["display_name"]);
                SetRadioDescription(arr[0]["station"]["description"]);
                SetSrcImage(arr[0]["station"]["images"]["station"]);
            }
        })
        .catch(function(err) {
            console.error(err)
            alert("Not work API sever");
        });
    }

    function gpi_next_song() {
        let index = RadioIndex;
        if (RadioData[index] === undefined) {
            index = 0;
            SetRadioIndex(index);
            if (RadioData[index] === undefined) {
                index = -1
                SetRadioIndex(index);
                return;
            }
        }
        else {
            index += 1;
            SetRadioIndex(index);
        }

        console.log(`index: ${index}`);
        console.log(`RadioIndex: ${RadioIndex}`);
        console.log("RadioData[index]");
        console.log(RadioData[index])

        SetRadioName(RadioData[index]["station"]["display_name"]);
        SetRadioDescription(RadioData[index]["station"]["description"]);
        SetSrcImage(RadioData[index]["station"]["images"]["station"]);
    }

    return (
        <div className={styles.b_player}>
            <div className={styles.player_img}>
                <img
                    src={RadioSrcImage}
                    alt=""
                />
            </div>
            <div className={styles.player_info}>
                <div className={styles.player_name}>
                    {RadioName}
                </div>
                <div className={styles.player__description}>
                    {RadioDescription}
                </div>
            </div>
            <div>
                <button
                    className={styles.player__button}
                    onClick={event => get_json()}
                >
                    <FontAwesomeIcon icon={faPlay} />
                </button>
                <button
                    className={styles.player__button}
                    onClick={event => gpi_next_song()}
                >
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>
        </div>
    );
};
