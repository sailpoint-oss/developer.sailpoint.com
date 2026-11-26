# MachineClassificationCriteriaOperation

# MachineClassificationCriteriaOperation

Operation applied to classification criteria.  `EQUALS`, `NOT_EQUALS`, `STARTS_WITH`, `ENDS_WITH`, `CONTAINS`, and `NOT_CONTAINS` are leaf operators. They require `attribute` and `value`. `NOT_CONTAINS` matches when the attribute value does not contain `value`.  `EXISTS` and `NOT_EXISTS` are presence-only leaf operators. They require `attribute` and do not use `value`. `EXISTS` matches when the attribute is present. `NOT_EXISTS` matches when it is absent.  `EMPTY` and `NOT_EMPTY` are value-less leaf operators. They require `attribute` and do not use `value`. `EMPTY` matches when the attribute is null, blank, or an empty collection. `NOT_EMPTY` matches any other value.  `AND` and `OR` are composite operators. They require `children` and do not use `attribute` or `value`.

## Enum

* `EQUALS` (value: `'EQUALS'`)

* `NOT_EQUALS` (value: `'NOT_EQUALS'`)

* `STARTS_WITH` (value: `'STARTS_WITH'`)

* `ENDS_WITH` (value: `'ENDS_WITH'`)

* `CONTAINS` (value: `'CONTAINS'`)

* `NOT_CONTAINS` (value: `'NOT_CONTAINS'`)

* `AND` (value: `'AND'`)

* `OR` (value: `'OR'`)

* `EXISTS` (value: `'EXISTS'`)

* `NOT_EXISTS` (value: `'NOT_EXISTS'`)

* `EMPTY` (value: `'EMPTY'`)

* `NOT_EMPTY` (value: `'NOT_EMPTY'`)

[[Back to top]](#) 

