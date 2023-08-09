# ADR 004: data format transition

Across all the conversion process, the data change its structure 2 times. The
first time is for remove the `coiote` format and the second is for create the
Asset Tracker object.

In the first transformation, when the Coiote format is removed, a LwM2M format
is set using the LwM2M types lib. This happens because it is expected to other
LwM2M integrations to appear in the future.
