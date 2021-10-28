import axios from 'axios';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlay,
    faPause,
    faArrowRight,
    faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';
import { Howl } from "howler";

import "./App.css";
import styles from "./App.module.css";

export default function App() {
    const [ConstructorIsRun, SetConstructorIsRun] = useState(false);
    const [RadioData, SetRadioData] = useState([]);
    const [RadioIndex, SetRadioIndex] = useState(0);
    const [RadioName, SetRadioName] = useState("Radio name");
    const [RadioSrcImage, SetSrcImage] = useState("");
    const [RadioDescription, SetRadioDescription] = useState("Description");
    const [RadioAudio, SetRadioAudio] = useState("");
    //Play
    const [RadioHowler, SetRadioHowler] = useState(new Howl({ src: [RadioAudio], html5: true, }));
    const [RadioIsPlay, SetRadioIsPlay] = useState(false);
    const [RadioPlayIcon, SetRadioPlayIcon] = useState(faPlay);

    (function () { // Constructor
        if (ConstructorIsRun) {
            return;
        }
        SetConstructorIsRun(true);
        get_json();
    })();

    function get_json() {
        const URL = `${process.env.REACT_APP__API_URL}:${process.env.REACT_APP__API_PORT}/gpi-get-radio`;
        axios.get(URL)
            .then(function (response) {
                let arr = response.data;
                console.log(arr);

                if (arr[0]) {
                    console.log(arr[0]);
                    SetRadioData(arr);
                    SetRadioName(arr[0]["station"]["display_name"]);
                    SetRadioDescription(arr[0]["station"]["description"]);
                    SetSrcImage(arr[0]["station"]["images"]["station"]);
                    SetRadioAudio(arr[0]["station"]["stream_url"]);
                    const hwr = new Howl({
                        src: [
                            arr[0]["station"]["stream_url"]
                        ],
                        html5: true,
                    });
                    SetRadioHowler(hwr);
                }
            })
            .catch(function (err) {
                console.error(err)
                alert("Not work API sever");
            });
    }

    function gpi_prev_song() {
        let index = RadioIndex;
        index -= 1;

        if (RadioData[index] === undefined) {
            return;
        }

        SetRadioIndex(index);
        SetRadioName(RadioData[index]["station"]["display_name"]);
        SetRadioDescription(RadioData[index]["station"]["description"]);
        SetSrcImage(RadioData[index]["station"]["images"]["station"]);
        SetRadioAudio(RadioData[index]["station"]["stream_url"]);

        RadioHowler.stop();
        SetRadioIsPlay(false);
        SetRadioPlayIcon(faPause);
        const hwr = new Howl({
            src: [
                RadioData[index]["station"]["stream_url"]
            ],
            html5: true,
        });
        SetRadioHowler(hwr);
    }

    function gpi_next_song() {
        let index = RadioIndex;
        index += 1;

        if (RadioData[index] === undefined) {
            return;
        }

        SetRadioIndex(index);
        SetRadioName(RadioData[index]["station"]["display_name"]);
        SetRadioDescription(RadioData[index]["station"]["description"]);
        SetSrcImage(RadioData[index]["station"]["images"]["station"]);
        SetRadioAudio(RadioData[index]["station"]["stream_url"]);

        RadioHowler.stop();
        SetRadioIsPlay(false);
        SetRadioPlayIcon(faPause);
        const hwr = new Howl({
            src: [
                RadioData[index]["station"]["stream_url"]
            ],
            html5: true,
        });
        SetRadioHowler(undefined);
        SetRadioHowler(hwr);
    }

    function gpi_play() {
        if (RadioIsPlay) {
            SetRadioIsPlay(false);
            SetRadioPlayIcon(faPause);
            RadioHowler.pause();
        }
        else {
            SetRadioIsPlay(true);
            SetRadioPlayIcon(faPlay);
            RadioHowler.play();
        }
    }

    return (
        <div className={styles.b_player}>
            <div className={styles.player__index}>
                {RadioIndex}
            </div>
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
                    onClick={event => gpi_prev_song()}
                >
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <button
                    className={styles.player__button}
                    onClick={event => gpi_play()}
                >
                    <FontAwesomeIcon icon={RadioPlayIcon} />
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
