import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Desktop(props) {
  const { nodes, materials } = useGLTF('/myDesktopSet.glb')
  return (
    <group {...props} dispose={null} scale={[5,5,5]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials['Material.008']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials['Material.007']}
        position={[0, 0.371, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials['Material.008']}
        position={[0, 0, -0.32]}
        scale={[0.35, 0.35, 0.355]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={materials['Material.007']}
        position={[0.082, 0.166, -0.524]}
        scale={[1, 1, 1.11]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={materials['Material.007']}
        position={[0.082, 0.054, -0.524]}
        scale={[1, 1, 1.11]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube006.geometry}
        material={nodes.Cube006.material}
        position={[0.364, 0.161, -0.518]}
        scale={[0.406, 0.324, 0.686]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube007.geometry}
        material={nodes.Cube007.material}
        position={[0.364, -0.126, -0.417]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.406, 0.324, 0.686]}
      />
      <group position={[-0.254, 0.391, 0.156]} scale={0.13}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008.geometry}
          material={materials['Material.001']}
          position={[0.207, 0, 0]}
          scale={7.7}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009.geometry}
          material={materials['Material.001']}
          position={[0.207, 0, 0]}
          scale={7.7}
        />
        <group position={[0.162, 1.646, 0]} scale={7.7}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube010_1.geometry}
            material={materials['Material.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube010_2.geometry}
            material={materials['Material.006']}
          />
        </group>
      </group>
      <group position={[-0.041, 0.499, -0.532]} scale={[0.201, 0.095, 0.095]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube051.geometry}
          material={materials['Material.009']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube051_1.geometry}
          material={materials['Material.014']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube051_2.geometry}
          material={materials['Material.015']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube061.geometry}
        material={materials['Material.009']}
        position={[0.153, 0.391, -0.45]}
        scale={0.008}
      />
      <group position={[0.157, 0.397, 0.286]} rotation={[0, 0.018, 0]} scale={0.063}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube012.geometry}
          material={materials['Material.001']}
          position={[0.162, -0.112, -0.8]}
          scale={15.754}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube013.geometry}
          material={materials['Material.002']}
          position={[-0.612, 0.002, 1.906]}
          scale={[0.095, 0.04, 0.095]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube016.geometry}
          material={materials['Material.002']}
          position={[-0.612, 0.002, 1.627]}
          scale={[0.095, 0.04, 0.095]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube017.geometry}
          material={materials['Material.002']}
          position={[-0.612, 0.002, 0.728]}
          scale={[0.095, 0.04, 0.095]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube018.geometry}
          material={materials['Material.002']}
          position={[-0.612, 0.002, -0.186]}
          scale={[0.095, 0.04, 0.095]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube019.geometry}
          material={materials['Material.002']}
          position={[-0.369, 0.002, 1.906]}
          scale={[0.095, 0.04, 0.095]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube020.geometry}
          material={materials['Material.002']}
          position={[-0.369, 0.002, -0.562]}
          scale={[0.095, 0.04, 0.095]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube021.geometry}
          material={materials['Material.002']}
          position={[-0.18, 0.002, 1.615]}
          scale={[0.095, 0.04, 0.095]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube022.geometry}
          material={materials['Material.002']}
          position={[-0.18, 0.002, 1.904]}
          scale={[0.095, 0.04, 0.095]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube023.geometry}
          material={materials['Material.002']}
          position={[0.008, 0.002, 1.558]}
          scale={[0.095, 0.04, 0.095]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube024.geometry}
          material={materials['Material.002']}
          position={[0.008, 0.002, 1.904]}
          scale={[0.095, 0.04, 0.095]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube025.geometry}
          material={materials['Material.002']}
          position={[0.202, 0.002, 1.483]}
          scale={[0.095, 0.04, 0.095]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube026.geometry}
          material={materials['Material.002']}
          position={[0.202, 0.002, 1.904]}
          scale={[0.095, 0.04, 0.095]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube027.geometry}
          material={materials['Material.002']}
          position={[0.405, 0.002, 1.581]}
          scale={[0.095, 0.04, 0.118]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube028.geometry}
          material={materials['Material.002']}
          position={[0.404, 0.002, 1.904]}
          scale={[0.095, 0.04, 0.095]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube029.geometry}
          material={materials['Material.002']}
          position={[0.202, 0.002, -0.416]}
          scale={[0.095, 0.04, 0.095]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube030.geometry}
          material={materials['Material.002']}
          position={[0.404, 0.002, 1.136]}
          scale={[0.095, 0.04, 0.095]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube031.geometry}
          material={materials['Material.002']}
          position={[0.405, 0.002, -0.11]}
          scale={[0.095, 0.04, 0.105]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube032.geometry}
          material={materials['Material.002']}
          position={[0.404, 0.002, -0.416]}
          scale={[0.095, 0.04, 0.095]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube034.geometry}
          material={materials['Material.002']}
          position={[-0.178, 0.002, -0.562]}
          scale={[0.095, 0.04, 0.095]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube036.geometry}
          material={materials['Material.002']}
          position={[-0.612, 0.002, -0.997]}
          scale={[0.095, 0.04, 0.095]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube037.geometry}
          material={materials['Material.002']}
          position={[-0.377, 0.002, -0.997]}
          scale={[0.095, 0.04, 0.095]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube038.geometry}
          material={materials['Material.002']}
          position={[-0.189, 0.002, -0.997]}
          scale={[0.095, 0.04, 0.095]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube039.geometry}
          material={materials['Material.002']}
          position={[0.21, 0.002, -1.186]}
          scale={[0.095, 0.04, 0.095]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube040.geometry}
          material={materials['Material.002']}
          position={[0.399, 0.002, -0.997]}
          scale={[0.095, 0.04, 0.095]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube041.geometry}
          material={materials['Material.002']}
          position={[-0.377, 0.002, -1.6]}
          scale={[0.095, 0.04, 0.095]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube042.geometry}
          material={materials['Material.002']}
          position={[-0.186, 0.002, -1.6]}
          scale={[0.095, 0.04, 0.095]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube043.geometry}
          material={materials['Material.002']}
          position={[-0.003, 0.002, -1.6]}
          scale={[0.095, 0.04, 0.095]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube044.geometry}
          material={materials['Material.002']}
          position={[0.183, 0.002, -1.6]}
          scale={[0.095, 0.04, 0.095]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube045.geometry}
          material={materials['Material.002']}
          position={[0.39, 0.002, -1.6]}
          scale={[0.095, 0.04, 0.095]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube046.geometry}
          material={materials['Material.002']}
          position={[0.392, 0.002, -1.977]}
          scale={[0.095, 0.04, 0.095]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube047.geometry}
          material={materials['Material.002']}
          position={[0.392, 0.002, -2.165]}
          scale={[0.095, 0.04, 0.095]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube048.geometry}
          material={materials['Material.002']}
          position={[0.028, 0.002, -2.165]}
          scale={[0.095, 0.04, 0.095]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere.geometry}
          material={materials['Material.003']}
          position={[-0.618, 0, -1.677]}
          scale={0.062}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere001.geometry}
          material={materials['Material.004']}
          position={[-0.618, 0, -1.871]}
          scale={0.062}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere002.geometry}
          material={materials['Material.004']}
          position={[-0.618, 0, -2.051]}
          scale={0.062}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials['Material.005']}
        position={[0.15, 0.385, -0.002]}
        rotation={[0, -0.124, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials['Material.005']}
        position={[0.151, 0.401, 0.002]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[1, 0.56, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube035.geometry}
        material={materials['Material.001']}
        position={[0.161, 0.397, 0.002]}
        scale={[0.023, 0.01, 0.023]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={materials['Material.010']}
        position={[-0.147, 0.403, 0.499]}
        scale={8.193}
      />
      <group position={[-0.147, 0.463, 0.499]} scale={8.327}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002_1.geometry}
          material={materials['Material.012']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002_2.geometry}
          material={materials['Material.011']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube057.geometry}
        material={materials['Material.016']}
        position={[-0.145, 0.446, 0.459]}
        scale={[0.004, 0.003, 0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube059.geometry}
        material={materials['Material.005']}
        position={[-0.227, 0.42, -0.207]}
        scale={0.032}
      />
      <group position={[-0.221, 0.423, -0.189]} rotation={[0.253, 0.147, 0.003]} scale={0.052}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Zufllige_Farbe}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Kugelschreiber_2_Silber}
        />
      </group>
      <group position={[-0.216, 0.386, -0.159]} scale={0.052}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.Spitzer_Metall_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3_1.geometry}
          material={materials.Spitzer_Metall_1}
        />
      </group>
      <group position={[-0.207, 0.442, -0.191]} rotation={[0.018, -0.02, -0.642]} scale={0.052}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.Tintenkiller_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5_1.geometry}
          material={materials.Tintenkiller}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_13.geometry}
        material={materials.Kugelschreiber_1}
        position={[-0.229, 0.467, -0.24]}
        rotation={[-0.318, -0.105, -0.041]}
        scale={0.046}
      />
      <group position={[-0.205, 0.438, -0.182]} rotation={[0.212, 0.028, 0.134]} scale={0.052}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8_1.geometry}
          material={materials.Kugelschreiber_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8_2.geometry}
          material={materials.Silber}
        />
      </group>
      <group position={[-0.235, 0.432, -0.191]} rotation={[-0.078, 0.623, 0.804]} scale={0.052}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_11_1.geometry}
          material={materials.Filzer_Schwarz}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_11_2.geometry}
          material={materials.Filzstift}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_11_3.geometry}
          material={materials.Fineliner_Zufllige_Farbe}
        />
      </group>
      <group position={[-0.251, 0.437, -0.193]} rotation={[-0.002, 0.015, 0.272]} scale={0.052}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_12.geometry}
          material={materials.Fineliner}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_12_1.geometry}
          material={materials.Fineliner_Zufllige_Farbe}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_25.geometry}
        material={materials.Geodreieck}
        position={[-0.16, 0.387, -0.232]}
        scale={0.052}
      />
      <group position={[-0.201, 0.444, -0.23]} rotation={[-0.242, -0.052, -0.182]} scale={0.052}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_18.geometry}
          material={materials.Silber}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_18_1.geometry}
          material={materials.Bleistift_Holz}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_18_2.geometry}
          material={materials.Bleistift_Miene}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_18_3.geometry}
          material={materials.Fineliner_Wei}
        />
      </group>
      <group position={[-0.253, 0.445, -0.234]} rotation={[0.224, -0.942, 0.727]} scale={0.052}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_21.geometry}
          material={materials.Silber}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_21_1.geometry}
          material={materials.Buntstift_1_Zufallsfarbe}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_21_2.geometry}
          material={materials.Bleistift_Holz}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_21_3.geometry}
          material={materials.Bleistift_Wei}
        />
      </group>
      <group position={[-0.219, 0.42, -0.21]} rotation={[-0.492, -0.137, -0.549]} scale={0.052}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_24.geometry}
          material={materials.Buntstift_2_Zufallsfarbe}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_24_1.geometry}
          material={materials.Bleistift_Holz}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_40.geometry}
        material={materials.material}
        position={[-0.187, 0.387, -0.123]}
        rotation={[3.136, -1.297, -1.502]}
        scale={0.052}
      />
      <group position={[-0.203, 0.39, -0.276]} rotation={[-0.008, -0.524, 1.57]} scale={0.054}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_28.geometry}
          material={materials.Schere_schwarzes_Gummi}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_28_1.geometry}
          material={materials.Schere_Schraube}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_28_2.geometry}
          material={materials.Schere_rotes_Gummi}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_28_3.geometry}
          material={materials.Schere_Metall}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube058.geometry}
        material={nodes.Cube058.material}
        position={[-0.161, 0.403, -0.356]}
        scale={[1.186, 1.232, 1.126]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube062.geometry}
        material={nodes.Cube062.material}
        position={[-0.177, 0.398, -0.332]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.822, 0.841, 0.767]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube063.geometry}
        material={materials.Material}
        position={[-0.195, 0.402, -0.356]}
        scale={1.186}
      />
      <group
        position={[-0.191, 0.403, -0.356]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.016, 0.023, 0.023]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_1.geometry}
          material={materials.namecard}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_2.geometry}
          material={materials['Material.013']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane002.geometry}
        material={materials.namecard}
        position={[-0.226, 0.403, -0.356]}
        rotation={[0, 0, -1.432]}
        scale={[0.016, 0.023, 0.023]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane003.geometry}
        material={materials.namecard}
        position={[-0.188, 0.403, -0.356]}
        rotation={[0, 0, -1.203]}
        scale={[0.016, 0.023, 0.023]}
      />
    </group>
  )
}

useGLTF.preload('/source/myDesktopSet.glb')