
/**
 * Returns the identifying name of this module.
 *
 * Standalone, synchronous, zero-argument helper that always returns the
 * constant module identifier. It performs no I/O and has no side effects.
 *
 * @returns {string} The module identifier — always the literal "Module A".
 */
function getInfo() {
  return "Module A";
}

module.exports = { getInfo };
