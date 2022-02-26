import { useState } from "react";
import { connect } from "react-redux";
import "./PantryInput.css";
import { IonButton, IonInput, IonText, IonGrid, IonCol, IonRow, IonIcon, useIonToast, IonCardHeader } from "@ionic/react";
import { addCircleOutline } from 'ionicons/icons';
import * as actionType from "../../redux/actions";

function PantryInput(props) {
    const { ingredients, actions } = props;

    const [present] = useIonToast();

    const initialIngredient = {
        id: null,
        name: "",
        qty: null,
    };

    const [ingredient, setIngredient] = useState(initialIngredient);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setIngredient({ ...ingredient, [name]: value });
    };

    const addIngredient = () => {
        if (ingredient.name !== "" && ingredient.qty >= 1) {
            ingredients.push({
                id: Date.now(),
                name: ingredient.name,
                qty: ingredient.qty
            })

            actions.addIngredient([...ingredients]);

            setIngredient(initialIngredient);

        } else {

            present({
                message: 'Please fill in the fields.',
                color: 'danger',
                position: 'top',
                duration: 3000
            });
        }
    };
    return (
        <>
            <IonText className="ion-text-start">
                <h1 className="title">My Pantry</h1>
            </IonText>
            <IonGrid className="grid-container">
                <IonRow color="primary" style={{ marginLeft: "3%" }}>
                    <IonCol size="7">
                        <IonInput type="text" name="name" placeholder="Ingredient's name" className="add-input ion-text-center" required value={ingredient.name} onIonChange={handleInputChange} ></IonInput>
                    </IonCol>
                    <IonCol size="3">
                        <IonInput type="number" name="qty" placeholder="Qty" min={0} className="add-input ion-text-center" required value={ingredient.qty} onIonChange={handleInputChange} ></IonInput>
                    </IonCol>
                    <IonCol size="2">
                        <IonButton className="add-button" onClick={addIngredient} >
                            <IonIcon icon={addCircleOutline} ></IonIcon>
                        </IonButton>
                    </IonCol>
                </IonRow>
            </IonGrid>
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
        addIngredient: (payload) => {
            dispatch(actionType.addIngredient(payload));
        }
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(PantryInput);
