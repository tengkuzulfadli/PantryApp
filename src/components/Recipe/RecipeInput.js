import { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import {
    IonButton,
    IonInput,
    IonText,
    IonContent,
    IonLabel,
    IonTextarea,
    IonPage,
    IonToolbar,
    IonHeader,
    IonIcon,
    IonBackButton,
    IonGrid,
    IonRow,
    IonCol,
    IonList,
    IonItem,
    IonSelect,
    IonSelectOption,
    useIonToast
} from "@ionic/react";
import { addCircleOutline, trashOutline } from 'ionicons/icons';
import * as actionType from "../../redux/actions";

function RecipeInput(props) {

    const { ingredients, recipes, selectedRecipe, actions } = props;

    let history = useHistory();

    const [present] = useIonToast();

    const [ingredient, setIngredient] = useState(selectedRecipe);

    const [ingredientsForRecipe, setIngredientsForRecipe] = useState([...selectedRecipe.ingredients]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setIngredient({ ...ingredient, [name]: value });
    };

    const addIngredientForRecipe = () => {
        if (ingredient.name !== "" && ingredient.qty >=1) {
            const selectedIngredient = ingredients.find((value)=>{
                return value.name === ingredient.name
            })
            if (parseInt(selectedIngredient.qty)<parseInt(ingredient.qty)) {
                present({
                    message: "You do not have enough stock in your pantry",
                    color: 'danger',
                    position: 'top',
                    duration: 3000
                });
            } else {
                ingredientsForRecipe.push({
                    id: Date.now(),
                    name: ingredient.name,
                    qty: ingredient.qty
                });
                setIngredientsForRecipe([...ingredientsForRecipe]);
            }            
        } else {
            present({
                message: 'Please fill in the fields.',
                color: 'danger',
                position: 'top',
                duration: 3000
            });
        }
    };

    const deleteIngredientForRecipe = (id) => {
        const updateIngredientsForRecipe = ingredientsForRecipe.filter((element)=>{
           return element.id !== id
        });
        setIngredientsForRecipe([...updateIngredientsForRecipe]);
    };

    const addRecipe = () => {
        if ((ingredient.title !== "" && ingredient.method !== "") && ingredientsForRecipe.length >0) {
            if (selectedRecipe.id) {
                const selectIndex = recipes.findIndex((value)=>{
                    return value.id === selectedRecipe.id
                });
                recipes[selectIndex] = {
                    id: selectedRecipe.id,
                    title: ingredient.title,
                    ingredients: ingredientsForRecipe,
                    method: ingredient.method
                }
            } else {
                recipes.push({
                    id: Date.now(),
                    title: ingredient.title,
                    ingredients: ingredientsForRecipe,
                    method: ingredient.method
                });                
            }
            actions.addRecipe([...recipes]);
            history.goBack();
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
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonGrid>
                        <IonRow>
                            <IonCol size="2">
                                <IonBackButton>
                                    <IonLabel color="primary">Back</IonLabel>
                                </IonBackButton>
                            </IonCol>
                            <IonCol>
                                <IonText>
                                    <h3 style={{ textAlign: "center", paddingRight: "19%" }}>Create a Receipe</h3>
                                </IonText>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <div className="div-recipe-input">
                    <IonLabel>Title</IonLabel>
                    <IonInput type="text" name="title" value={ingredient.title} onIonChange={handleInputChange} className="add-input recipe-input" ></IonInput>
                    <IonLabel>Ingredients</IonLabel>
                    <IonGrid>
                        <IonRow className="row-ingredient">
                            <IonCol size="7">
                                <IonSelect name="name" placeholder="Ingredient's name" value={ingredient.name} onIonChange={handleInputChange} interface="popover" className="add-input" >
                                    {
                                        ingredients.map((value, index) => {
                                            return <IonSelectOption key={index} value={value.name}>{value.name}</IonSelectOption>
                                        })
                                    }
                                </IonSelect>
                            </IonCol>
                            <IonCol size="3">
                                <IonInput type="number" name="qty" placeholder="Qty" min={0} className="add-input" value={ingredient.qty} onIonChange={handleInputChange} ></IonInput>
                            </IonCol>
                            <IonCol size="2">
                                <IonButton className="add-button" onClick={addIngredientForRecipe} >
                                    <IonIcon icon={addCircleOutline} ></IonIcon>
                                </IonButton>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                    <IonList className="list" lines="none">
                        {
                            ingredientsForRecipe.length === 0 ? <IonItem style={{ textAlign: "center", paddingBottom: "15%" }} >
                                <IonText className="nolist">Add ingredients</IonText>
                            </IonItem> :
                                ingredientsForRecipe.map((value, index) => {
                                    return <IonItem key={index}>
                                        <IonGrid>
                                            <IonRow>
                                                <IonCol size="7" style={{ padding: "14px 5px" }} >
                                                    <IonText>{value.name}</IonText>
                                                </IonCol>
                                                <IonCol size="3" style={{ padding: "14px 5px" }} >
                                                    <IonText>{value.qty}</IonText>
                                                </IonCol>
                                                <IonCol size="2">
                                                    <IonButton color="danger" onClick={() => deleteIngredientForRecipe(value.id)} >
                                                        <IonIcon icon={trashOutline}></IonIcon>
                                                    </IonButton>
                                                </IonCol>
                                            </IonRow>
                                        </IonGrid>
                                    </IonItem>
                                })
                        }
                    </IonList>
                    <IonLabel>Method</IonLabel>
                    <IonTextarea name="method" value={ingredient.method} onIonChange={handleInputChange} rows="10" className="add-input method-input" ></IonTextarea>
                    <div style={{ textAlign: "center" }}>
                        <IonButton onClick={addRecipe} style={{ width: "100%" }}>
                            Create
                        </IonButton>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
}

const mapStateToProps = (state) => {
    return ({
        ingredients: state.ingredient.ingredients,
        recipes: state.recipe.recipes,
        selectedRecipe: state.recipe.selectedRecipe
    })
};

const mapDispatchToProps = (dispatch) => ({
    actions: {
        addRecipe: (payload) => {
            dispatch(actionType.addRecipe(payload));
        }
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeInput);
