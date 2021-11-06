import axios from 'axios';
import {
    useEffect,
    useState,
} from 'react';
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
    const [gpi_radioIndex, gpi_setRadioIndex] = useState(0);
    const [gpi_radioArray, gpi_setRadioArray] = useState([
        {
            station: {
                images: {
                    station: "",
                },
                stream_url: "",
                name: "Name",
                description: "Description...",
            },
        }
    ]);
    //Play
    const [gpi_radioHowler, gpi_setRadioHowler] = useState();
    const [gpi_radioIsPlay, gpi_setRadioIsPlay] = useState(false);
    const [gpi_radioPlayIcon, gpi_setRadioPlayIcon] = useState(faPlay);

    useEffect(() => {
        get_json();
    }, []);

    async function get_json() {
        const GPI_URL = `${process.env.REACT_APP__API_URL}:${process.env.REACT_APP__API_PORT}/gpi-get-radio`;
        try {
            const GPI_RESPONSE = await axios.get(GPI_URL)
            const GPI_ARR = GPI_RESPONSE.data;
            console.log(GPI_ARR);
    
            if (GPI_ARR[0]) {
                console.log(GPI_ARR[0]);
                gpi_setRadioArray(GPI_ARR);
                const GPI_HWR = new Howl({
                    src: [
                        GPI_ARR[0].station.stream_url
                    ],
                    html5: true,
                });
                gpi_setRadioHowler(GPI_HWR);
            }
        }
        catch (gpi_err) {
            console.error(gpi_err);
            alert("Not work API sever");
        }
    }

    function gpi_prev_song() {
        let gpi_index = gpi_radioIndex;
        gpi_index -= 1;

        if (gpi_radioArray[gpi_index] === undefined) {
            alert("It is the first station");
            return;
        }

        gpi_setRadioIndex(gpi_index);
        console.log(gpi_radioArray[gpi_index]);

        gpi_radioHowler.stop();
        gpi_setRadioIsPlay(false);
        gpi_setRadioPlayIcon(faPlay);
        const GPI_HWR = new Howl({
            src: [
                gpi_radioArray[gpi_index].station.stream_url,
            ],
            html5: true,
        });
        gpi_setRadioHowler(GPI_HWR);
    }

    function gpi_next_song() {
        let gpi_index = gpi_radioIndex;
        gpi_index += 1;

        if (gpi_radioArray[gpi_index] === undefined) {
            alert("This is the last station");
            return;
        }

        gpi_setRadioIndex(gpi_index);
        console.log(gpi_radioArray[gpi_index]);

        gpi_radioHowler.stop();
        gpi_setRadioIsPlay(false);
        gpi_setRadioPlayIcon(faPlay);
        const GPI_HWR = new Howl({
            src: [
                gpi_radioArray[gpi_index].station.stream_url,
            ],
            html5: true,
        });
        gpi_setRadioHowler(GPI_HWR);
    }

    function gpi_play() {
        if (gpi_radioHowler === undefined) {
            alert("Audio not loaded");
            return;
        }

        if (gpi_radioIsPlay) {
            gpi_setRadioIsPlay(false);
            gpi_setRadioPlayIcon(faPlay);
            gpi_radioHowler.pause();
        }
        else {
            gpi_setRadioIsPlay(true);
            gpi_setRadioPlayIcon(faPause);
            gpi_radioHowler.play();
        }
    }

    return (
        <div className={styles.b_player}>
            <div className={styles.player__index}>
                {gpi_radioIndex}
            </div>
            <div className={styles.player_img}>
                <img
                    src={gpi_radioArray[gpi_radioIndex].station.images.station}
                    alt=""
                />
            </div>
            <div className={styles.player_info}>
                <div className={styles.player_name}>
                    {gpi_radioArray[gpi_radioIndex].station.name}
                </div>
                <div className={styles.player__description}>
                    {gpi_radioArray[gpi_radioIndex].station.description}
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
                    <FontAwesomeIcon icon={gpi_radioPlayIcon} />
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
