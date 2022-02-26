import { connect } from "react-redux";
import { IonGrid, IonRow, IonCol, IonList, IonItem, IonText, IonButton } from "@ionic/react";
import "../Pantry/PantryList.css";
import * as actionType from "../../redux/actions";

function RecipeList(props) {
    const { recipes, histories, actions } = props;
    const initialSelectedRecipe = {
        id: null,
        title: "",
        name: "",
        qty: null,
        ingredients: [],
        method: ""
    };
    const deleteRecipe = (id) => {
        const updateRecipes = recipes.filter((element) => {
            return element.id !== id
        });
        const newHistory = recipes.find((element) => {
            return element.id === id
        });
        histories.push(newHistory);
        actions.addHistory([...histories]);
        actions.deleteRecipe(updateRecipes);
    };
    const selectRecipe = (id) => {        
        const selectedRecipe = recipes.find((element) => {
            return element.id === id
        });
        actions.selectRecipe(selectedRecipe);
    };
    return (
        <>
            <IonText className="ion-text-start">
                <h1 className="title">My Recipe</h1>
            </IonText>
            <IonButton className='recipe-add-button' onClick={()=>actions.selectRecipe(initialSelectedRecipe)} routerLink='/recipe/recipeinput'>
                Create a Recipe
            </IonButton>
            
            <IonList lines="none" className="list">
                {
                    recipes.length === 0 ? <IonItem style={{ textAlign: "center" }} >
                        <IonText className="nolist">Create your first recipe</IonText>
                    </IonItem> :
                        recipes.map((value, index) => {
                            return <IonList lines="none"><IonItem key={index}>
                                <IonGrid>
                                    <IonRow className="row-recipe-list">
                                        <IonCol size="8">
                                            <IonButton fill="clear" color="dark" size="large" routerLink='/recipe/recipeinput' onClick={() => selectRecipe(value.id)} >
                                                <IonItem lines="none" class="ion-text-wrap" style={{ lineHeight: "25px", textAlign: "left" }}>{value.title}</IonItem>
                                            </IonButton>
                                        </IonCol>
                                        <IonCol size="3" class="cook-btn">
                                            <IonButton color="success" onClick={() => deleteRecipe(value.id)} >
                                                Cook
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
        recipes: state.recipe.recipes,
        histories: state.history.histories
    })
};

const mapDispatchToProps = (dispatch) => ({
    actions: {
        deleteRecipe: (payload) => {
            dispatch(actionType.deleteRecipe(payload));
        },
        selectRecipe: (payload) => {
            dispatch(actionType.selectRecipe(payload));
        },
        addHistory: (payload) => {
            dispatch(actionType.addHistory(payload));
        }
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);
