import React from 'react'
import zxcvbn from 'zxcvbn'
const PasswordStrenght = ({ change }) => {
    const taskResult = zxcvbn(change)
    const num = taskResult.score * 100 / 4
    console.log(num);
    console.log(taskResult);
    const createPassword = () => {
        switch (taskResult.score) {
            case 0:
                return 'very weak';
            case 1:
                return 'weak'
            case 2:
                return 'Fair'
            case 3:
                return 'Good'
            case 4:
                return 'Strong'
            default:
                return ' '
        }
    }
    const funcProgress = () => {
        switch (taskResult.score) {
            case 0:
                return '#828282';
            case 1:
                return '#EA1111'
            case 2:
                return '#FFAD00'
            case 3:
                return '#9b1158'
            case 4:
                return '#00b500'
            default:
                return 'none'
        }
    }
    const changePassword = () => ({
        width: `${num}%`,
        backgroundColor: funcProgress(),
        height: '100%'
    })
    return (
        <>
            <div className="progress">
                <div className="progress-bar " style={changePassword()}>
                </div>
                <p style={{ color: funcProgress() }}>{createPassword}</p>
            </div>
        </>
    )
}

export default PasswordStrenght