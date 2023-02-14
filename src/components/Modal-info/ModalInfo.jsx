import s from './ModalInfo.module.scss'

function Modal({data, onToggleModal}) {

    const elements = data.map(elem => {
        const {id, ...itemProps} = elem
        return (
            <ModalInfo key={id}
                       {...itemProps}
                       onToggleModal={onToggleModal}
                       id={id}/>
        )
    })

    return (
        <div>
            {elements}
        </div>
    )
}

function ModalInfo({name, onToggleModal, id, showModal, IIN, age, salary}) {
    return (
        <div className={showModal ? s.showModal : s.modal}>
            <div className={s.modalContent}>
                <span className={s.closeButton} onClick={() => onToggleModal(id)}>X</span>
                <h1>{name} туралы ақпарат</h1>
                <div className={s.employeeInfo}>
                    <span>ФИО: </span>
                    <input className={s.cleanSlide} id="name" type="text" value={name} /><label for="name">ФИО</label>
                </div>
                <div className={s.employeeInfo}>
                    <span>ИИН: </span>
                    <input className={s.cleanSlide} id="IIN" type="text" defaultValue={IIN} /><label for="ИИН">ИИН</label>
                </div>
                <div className={s.employeeInfo}>
                    <span>Жасы: </span>
                    <input className={s.cleanSlide} id="age" type="text" defaultValue={age} /><label for="age">Жасы</label>
                </div>
                <div className={s.employeeInfo}>
                    <span>Жалакысы: </span>
                    <input className={s.cleanSlide} id="salary" type="text" defaultValue={salary + " KZT"} /><label for="salary">Жалакысы</label>
                </div>
            </div>
        </div>
    );
}

export default Modal;