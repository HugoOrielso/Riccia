import { useContext } from "react";
import { ContextTest } from "./Provider.jsx";
import { toast } from 'sonner'

export function useValidations() {
    const { productosORecomendaciones, setConfirmarAnswerGlobal, setProductosORecomendaciones } = useContext(ContextTest);
    function verificarSeleccion() {
        if (productosORecomendaciones == "") {
            toast.warning("Selecciona un item");
            return false;
        }
        return true;
    }

    const handleAnswer = (answer) => {
        setProductosORecomendaciones(prevAnswers => ({
        ...prevAnswers,
        answer
      }));
    };

    function handleConfirmacion() {
        let sele = verificarSeleccion();
        if (!sele) {
            return;
        }
        setConfirmarAnswerGlobal(true);
    }

    return { handleConfirmacion, verificarSeleccion, handleAnswer };
}
