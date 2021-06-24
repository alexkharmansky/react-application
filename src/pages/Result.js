import React from 'react';
import '../App.css';

const Result = () => {
    return (
        <div>
            <div className="container">
            <h1 className="main__title">Results</h1>

            <table className="posts__table">
                <tr className="posts__cell">
                    <td className="posts__item">
                    <h3 className="posts__title">Result 1</h3>
                    <p className="posts__body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt cum voluptatum laboriosam ipsam alias! Ea cum nulla perspiciatis consequatur dolore placeat eos cumque voluptate? Amet hic sed, dolorum expedita explicabo accusamus debitis quidem quisquam corrupti quam magni at saepe consequatur distinctio ipsam eaque sequi! Provident at repellendus non sequi obcaecati.</p>
                    </td>
                </tr>
                <tr className="posts__cell">
                    <td className="posts__item">
                    <h3 className="posts__title">Result 2</h3>
                    <p className="posts__body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt cum voluptatum laboriosam ipsam alias! Ea cum nulla perspiciatis consequatur dolore placeat eos cumque voluptate? Amet hic sed, dolorum expedita explicabo accusamus debitis quidem quisquam corrupti quam magni at saepe consequatur distinctio ipsam eaque sequi! Provident at repellendus non sequi obcaecati.</p>
                    </td>
                </tr>
            </table>
            </div>
        </div>
    )
}

export default Result;