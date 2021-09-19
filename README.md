# Estructure of Data Base
En este archivo se muestra una primera organización de la base de datos.

Donde se especifican cada uno de los campos de registros y las relaciones que deben existis entre ellas
  
Cuando se necesite una relación se colocará el prefijo RE
Los nombres de las tablas, con sus abreviaciones, son los siguientes:
    - Módulo de administración del proyecto => MAP
    - Módulo de registro avance de proyecto => MRAP
    - Módulo de gestion estudiantes => MGE
    - Módulo de gestion de lideres => MGL
    - Módulo de gestion de proyecto => MGP

Con esto definido se procede a mostrar los campos de cada una de las tablas


Tables:

    MAP:

            -id
            -projet_descrip
            -objectives
            -money
            -initial_date
            -final_date
            -active
                -RE_MGL (id_project_director)
                -RE_MRAP (advance_percentaje)

    MRAP:

            -status_project
            -advance_percentaje
                -RE_MAP

    MGE:

            -id
            -name
            -career
            -phone
            -date_entry_project
                -RE_MAP (id_project)

    MGL:

            -id
            -name
            -phone
            -email
            -time_spend
                -RE_MAP (id_project)

    MGP:

        -name
        -fase
        -advance_delivery
        -note
            -RE_MAP (id_project)