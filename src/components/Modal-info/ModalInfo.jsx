import s from './ModalInfo.module.css'

function ModalInfo({data, onToggleModal}) {

    

   
    return (
        <div className={data[0].showModal ? s.showModal : s.modal}>
            <div className={s.modalContent}>
                <span className={s.closeButton} onClick={() => onToggleModal(data[0].id)}>X</span>
                <h1>Информация о сотруднике {data[0].name}</h1>
            </div>
        </div>
    );
}

export default ModalInfo;