import { connect } from "react-redux";
import { IonGrid, IonRow, IonCol, IonList, IonItem, IonText, IonButton, IonIcon } from "@ionic/react";
import { trashOutline } from 'ionicons/icons';
import "./PantryList.css";
import * as actionType from "../../redux/actions";

function PantryList(props) {
    const { ingredients, actions } = props;
    const deleteIngredient = (id) => {
        const updateIngredients = ingredients.filter((element)=>{
           return element.id !== id
        });
        actions.deleteIngredient(updateIngredients);
    };
    return (
        <>
            <IonText className="ion-text-start">
                <h3 className="title-2">Current Ingredients</h3>
            </IonText>

            <IonList lines="none" className="list">
                {
                    ingredients.length === 0 ? <IonItem style={{ textAlign: "center" }} >
                        <IonText className="nolist">Stock up your pantry now!</IonText>
                    </IonItem> :
                        ingredients.map((value, index) => {
                            return <IonList lines="none"><IonItem key={index}>
                                <IonGrid>
                                    <IonRow>
                                        <IonCol size="6" style={{padding: "14px 10px 0 0"}}>
                                            <IonText>{value.name}</IonText>
                                        </IonCol>
                                        <IonCol size="2" style={{padding: "14px 0"}} >
                                            <IonText>{value.qty}</IonText>
                                        </IonCol>
                                        <IonCol size="3" style={{ margin: "0 0 0 8%"}}>
                                            <IonButton color="danger" onClick={()=>deleteIngredient(value.id)} >
                                                <IonIcon icon={trashOutline}></IonIcon>
                                            </IonButton>
                                        </IonCol>
                                    </IonRow>
                                </IonGrid>
                            </IonItem></IonList>
                        })
                }
            </IonList>
        </>
    );
}

const mapStateToProps = (state) => {
    return ({
        ingredients: state.ingredient.ingredients,
    })
};

const mapDispatchToProps = (dispatch) => ({
    actions: {
        deleteIngredient: (payload) => {
            dispatch(actionType.deleteIngredient(payload));
        }
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(PantryList);
