import axios from 'axios';

export default function App() {
    function get_json() {
        const URL = `${process.env.REACT_APP__API_URL}:${process.env.REACT_APP__API_PORT}`;
        axios.get(URL)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div>
            <button
                onClick={event => get_json()}
            >Получить JSON</button>
        </div>
    );
};
