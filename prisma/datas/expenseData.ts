export const expenseSubAccount = [
  {
    acronym: 'APD',
    name: 'POSIBLES A DEDUCIR DENTRO DE LOS LÍMITES DE GASTOS AUTORIZADOS',
    expenseConcepts: {
      create: [
        {
          code: '11000',
          name: 'Materias Primas y Materiales',
          expenseItems: {
            create: [
              { code: '01', name: 'Alimento' },
              { code: '02', name: 'Materiales de la Construcción' },
              { code: '03', name: 'Vestuario y Lencería' },
              { code: '04', name: 'Materiales para la Enseñanza' },
              { code: '05', name: 'Medicamentos y Materiales Afines' },
              { code: '06', name: 'Materiales y Artículos de Consumo' },
              { code: '07', name: 'Libros y Revistas' },
              { code: '08', name: 'Útiles y Herramientas' },
              { code: '09', name: 'Partes y Piezas de Repuestos' },
              { code: '10', name: 'Otros Inventarios' },
              { code: '11', name: 'Equipos de Protección Personal' }
            ]
          }
        },
        {
          code: '20000',
          name: 'Mercancía para la Venta',
          expenseItems: {
            create: [
              { code: '01', name: 'Confituras' },
              { code: '02', name: 'Bebidas y Licores' },
              { code: '03', name: 'Cigarros y Tabacos' },
              { code: '04', name: 'Misceláneas' },
              { code: '05', name: 'Material de Oficina' }
            ]
          }
        },
        {
          code: '30000',
          name: 'Conbustible',
          expenseItems: {
            create: [
              { code: '01', name: 'Gas' },
              { code: '02', name: 'Combustibles' },
              { code: '03', name: 'Lubricantes y Aceites' },
              { code: '04', name: 'Leña' },
              { code: '05', name: 'Carbón' }
            ]
          }
        },
        {
          code: '40000',
          name: 'Energía Eléctrica',
          expenseItems: {
            create: [
              { code: '01', name: 'Energía Eléctrica' },
              { code: '02', name: 'Otras formas de energía' }
            ]
          }
        },
        {
          code: '50000',
          name: 'Remuneraciones al personal contratado',
          expenseItems: {
            create: [
              { code: '01', name: 'Salario' },
              { code: '02', name: 'Acumulación de Vacaciones' }
            ]
          }
        },
        {
          code: '70000',
          name: 'Depreciación de Activos Fijos Tangibles',
          expenseItems: {
            create: [
              { code: '01', name: 'Depreciación Activos Fijos Tangibles' },
              { code: '02', name: 'Amortización de Activos Fijos Intangibles' }
            ]
          }
        },
        {
          code: '80000',
          name: 'Otros Gastos Monetarios y Financieros',
          expenseItems: {
            create: [
              { code: '01', name: 'Viáticos Nacionales' },
              { code: '02', name: 'Prestación a Trabajadores' },
              { code: '03', name: 'Estipendio a Estudiantes' },
              {
                code: '04',
                name: 'Otros Servicios de Mantenimiento y Reparaciones Corrientes'
              },
              { code: '06', name: 'Otros Servicios Contratados' },
              { code: '07', name: 'Servicios Profesionales' },
              { code: '08', name: 'Otros Gastos' },
              { code: '09', name: 'Intereses y Comisiones Bancarias' },
              { code: '10', name: 'Servicio de Mantenimiento y Reparación Constructivo' }
            ]
          }
        }
      ]
    }
  },
  {
    acronym: 'DBI',
    name: 'DEDUCIBLE DIRECTAMENTE DE LA BASE IMPONIBLE',
    expenseConcepts: {
      create: [
        {
          code: '01',
          name: 'Pagos por arrendamiento de bienes a Entidades Estatales'
        },
        {
          code: '02',
          name: 'Importes exonerados  por concepto de arrendamiento por asumir gastos de reparaciones'
        }
      ]
    }
  },
  {
    acronym: 'ENIEIAMFP',
    name: 'EGRESOS NO INCLUIDOS A EFECTOS DE IMPUESTO AUTORIZADOS POR EL MFP'
  }
]
