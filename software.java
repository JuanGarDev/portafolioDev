    public static double obtenerNivel(Tecnologia tecnologia) {

        double nivel = tecnologia.getNivel();

        for (Framework framework : tecnologia.getFrameworks()) {
            nivel = nivel + framework.getNivel();
        }

        nivel = nivel / tecnologia.getFrameworks().size();

        return nivel;
    }}

    String lenguaje = "Java";
    double nivelJava = 8.5;