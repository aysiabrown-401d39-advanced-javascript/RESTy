import React from 'react';

class Help extends React.Component {
    render() {
        return (
            <>
                <div>
                    <h4>Home Page Usage:</h4>
                    <ul>
                        <li>In the text box, please type the API url you wish to access.</li>
                        <li>With the drop down menu, please select which ReSTful API call you are attempting to make</li>
                        <li>GET (retrieves data), POST (adds new data), PUT (updates data), DELETE (deletes data)</li>
                        <li>Clicking a previous API call in the history log, will repopulate the form so you can easily resubmit.</li>
                    </ul>
                    <p><b>NOTE:</b>Not every API will allow you access to every type of call. You may get an error. Any response will be displayed after you hit submit.</p>
                    <h4>History Page:</h4>
                    <ul>
                        <li>History will display all previous successful API calls.</li>
                        <li>If you click an API call, it will display the previous response.</li>
                        <li>You may hit the rerun button to rerun the same exact API call.</li>
                    </ul>
                </div>
            </>
        )
    }
}


export default Help;