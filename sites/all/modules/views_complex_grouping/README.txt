(Limit the number of rows under each grouping field and attached fields to each of them)

Build a view vith 5 fields (Field 1, Field 2, Field 3, Field 4, Field 5)

Default Grouping view
Grouping Field 1 Value 1
- Row 1
- Row 2
- Row 3
- Row 4
- Row 5
- Row 6

Grouping Field 1 Value 2
- Row 1
- Row 2
- Row 3


Complex Grouping view will enable to do somthing like this

Grouping Field 1 Value 1 (field 3 Value 1, Field 4 Value 1)
- Row 1
- Row 2

Grouping Field 1 Value 2 (field 3 Value 1, Field 4 Value 1)
- Row 1
- Row 2


To use this module, simply change the style plugin for your view to the "Grouping Field (with Limit)" option. 
You will then be presented with options to choose your limit and offset (the offset just controls what row to start on, e.g. an offset of 1 would omit the first row from each grouping field). Please note that in order for this to take effect, you must set your row limit on the actual view to Unlimited.
