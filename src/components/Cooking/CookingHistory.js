import { connect } from "react-redux";
import { IonGrid, IonRow, IonCol, IonList, IonItem, IonText, IonButton, IonIcon } from "@ionic/react";
import { trashOutline } from 'ionicons/icons';
import * as actionType from "../../redux/actions";

function CookingHistory(props) {
    const { histories, actions } = props;
    const deleteHistory = (id) => {
        const updateHistories = histories.filter((element) => {
            return element.id !== id
        });
        actions.deleteHistory(updateHistories);
    };
    return (
        <>
            <IonText>
                <h3 style={{ margin: "6% 11% 4%", color: "darkgray", fontWeight: "600" }}>Cooking History</h3>
            </IonText>
            <IonList className="list" lines="none">
                {
                    histories.length === 0 ? <IonItem style={{ textAlign: "center" }} >
                        <IonText className="nolist">Start cooking now</IonText>
                    </IonItem> :
                        histories.map((value, index) => {
                            return <IonItem key={index}>
                                <IonGrid>
                                    <IonRow>
                                        <IonCol size="9" style={{ padding: "14px 5px" }} >
                                            <IonText>{value.title}</IonText>
                                        </IonCol>
                                        <IonCol size="3">
                                            <IonButton color="danger" onClick={() => deleteHistory(value.id)} >
                                                <IonIcon icon={trashOutline}></IonIcon>
                                            </IonButton>
                                        </IonCol>
                                    </IonRow>
                                </IonGrid>
                            </IonItem>
                        })
                }
            </IonList>
        </>
    );
}

const mapStateToProps = (state) => {
    return ({
        histories: state.history.histories,
    })
};

const mapDispatchToProps = (dispatch) => ({
    actions: {
        deleteHistory: (payload) => {
            dispatch(actionType.deleteHistory(payload));
        }
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(CookingHistory);
