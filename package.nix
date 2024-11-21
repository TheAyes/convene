{ stdenv }:
stdenv.mkDerivation {
  nativeBuildInputs = [ bun ];
  buildInputs = [ ];
}
