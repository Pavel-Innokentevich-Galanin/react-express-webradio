import { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import AudioSpectrum from 'react-audio-spectrum'

import "./App.css";
import styles from "./App.module.css";

export default function App() {
    const [gpi_radioIsPlay, gpi_setRadioIsPlay] = useState(false);
    const gpi_audio_ref = useRef(null);

    function gpi_play_pause() {
        if (gpi_radioIsPlay) {
            document.getElementById(gpi_audio_ref.current.id).pause();
            gpi_setRadioIsPlay(false);
            return;
        }
        document.getElementById(gpi_audio_ref.current.id).play();
        gpi_setRadioIsPlay(true);
    }

    return (
        <div className={styles.player}>
            <div className={styles.player__audio}>
                <audio
                    id="gpi-audio"
                    crossorigin="anonymous"
                    ref={gpi_audio_ref}
                    preload="true"
                    src={process.env.REACT_APP__API_URL}
                >
                </audio>
                <AudioSpectrum
                    height={200}
                    width={300}
                    audioId={'gpi-audio'}
                    capColor={'red'}
                    capHeight={2}
                    meterWidth={2}
                    meterCount={512}
                    meterColor={[
                        { stop: 0, color: 'pink' },
                        { stop: 1, color: 'red' }
                    ]}
                    gap={1}
                />
            </div>
            <div className={styles.player__b_button}>
                <button className={styles.player__button} onClick={gpi_play_pause}>
                    {
                        gpi_radioIsPlay ?
                        (<FontAwesomeIcon icon={faPlay} />) :
                        (<FontAwesomeIcon icon={faPause} />)
                    }
                </button>
            </div>
        </div>
    );
};
