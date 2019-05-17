import { default as VectorLength } from './vector-length'
import { default as VectorScale } from './vector-scale'
import { default as VectorsAddition } from './vectors-addition'
import { default as VectorsSubtraction } from './vectors-subtraction'
import { default as VectorsDotProduct } from './vectors-dot-product'
import { default as VectorLinearCombination } from './vector-linear-combination'
import { default as LTReflection } from './linear-transformation-reflection'
import { default as LTScale } from './linear-transformation-scale'
import { default as LTRotation } from './linear-transformation-rotation'
import { default as LTShear } from './linear-transformation-shear'
import { default as MM } from './matrix-multiplication'
import { default as MMReversed } from './matrix-multiplication-reversed'
import { default as DeterminantScale } from './determinant-scale'
import { default as Determinant3DScale } from './determinant-3d-scale'
import { default as DeterminantShear } from './determinant-shear'
import { default as DeterminantNegative } from './determinant-negative'
import { default as DeterminantZero } from './determinant-zero'
import { default as Determinant3DZero } from './determinant-3d-zero'
import { default as LTShear3D } from './linear-transformation-3d-shear'
import { default as InverseShear3D } from './inverse-shear-3d'
import { default as InverseScale3D } from './inverse-scale-3d'

export default {
  'vectors: addition': VectorsAddition,
  'vectors: subtraction': VectorsSubtraction,
  'vectors: length': VectorLength,
  'vectors: scale': VectorScale,
  'vectors: dot product': VectorsDotProduct,
  'vectors: linear combination': VectorLinearCombination,
  'linear transformation: reflection': LTReflection,
  'linear transformation: scale': LTScale,
  'linear transformation: rotation': LTRotation,
  'linear transformation: shear': LTShear,
  'linear transformation: shear 3D': LTShear3D,
  'matrix-matrix multiplication: AB': MM,
  'matrix-matrix multiplication: BA': MMReversed,
  'determinant: scale transformation': DeterminantScale,
  'determinant: scale transformation 3D': Determinant3DScale,
  'determinant: shear transformation': DeterminantShear,
  'determinant: negative': DeterminantNegative,
  'determinant: zero': DeterminantZero,
  'determinant: zero 3D': Determinant3DZero,
  'inverse: shear 3D': InverseShear3D,
  'inverse: scale 3D': InverseScale3D
}
